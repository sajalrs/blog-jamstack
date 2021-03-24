import Layout from "../../../components/Layout";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { MENU_QUERY, MenuListItem } from "../../../components/Navbar";
import ProjectsList, {
  PROJECTS_PER_PAGE,
} from "../../../components/ProjectsList";
// import Carousel from "../../../components/Carousel";
export const PROJECTS_QUERY = gql`
  query projectsQuery(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    projects(first: $first, last: $last, after: $after, before: $before) {
      edges {
        node {
          date
          title
          slug
          content
          project {
            excerpt
            githuburl
            sourceurl
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export type Project = {
  date: string;
  title: string;
  slug: string;
  images: { img: string; caption: string }[];
  excerpt: string;
  githubURL: string;
  sourceURL: string;
  categories: string[];
};

type Props = {
  posts?: Project[];
  errors?: string;
  numOfPages: number;
  menuListItems: MenuListItem[];
};

export const PROJECTS_CURSORS_QUERY = gql`
  query projectsIDQuery {
    projects {
      edges {
        cursor
      }
    }
  }
`;

const IndexPage = ({ posts, errors, numOfPages, menuListItems }: Props) => {
  const router = useRouter();
  const pageNumber = parseInt(router.query.page.toString());
  if (errors) {
    return (
      <Layout title="Error" menuListItems={menuListItems}>
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }
  return (
    <Layout title="Projects" menuListItems={menuListItems}>
      <ProjectsList
        projects={posts!}
        curDir=".."
        numOfPages={numOfPages}
        pageNumber={pageNumber}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: PROJECTS_CURSORS_QUERY,
    context: { clientName: "wordPress" },
  });
  let paths = [];
  const numOfPages = Math.ceil(data.projects.edges.length / PROJECTS_PER_PAGE);
  for (let i = 1; i <= numOfPages; i++) {
    paths.push({ params: { page: i.toString() } });
  }

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const page = parseInt(params?.page! as string);
    const apolloClient = initializeApollo();

    const cursors = await apolloClient
      .query({
        query: PROJECTS_CURSORS_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) => [
        res.data.projects.edges[0],
        ...res.data.projects.edges.filter(
          (_: string, index: number) => (index + 1) % PROJECTS_PER_PAGE === 0
        ),
      ]);

    const { data } = await apolloClient.query({
      query: PROJECTS_QUERY,
      variables: {
        first: PROJECTS_PER_PAGE,
        last: null,
        after: page === 1 ? null : cursors[page - 1].cursor,
        before: null,
      },
      context: { clientName: "wordPress" },
    });
    const menuListItems = await apolloClient
      .query({
        query: MENU_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) =>
        res.data.menuItems.nodes.map(
          (node: { label: string; url: string }) => ({
            title: node.label,
            pageURL: node.url,
          })
        )
      );

    const imgRex = /<figure.*>.*<img.*?src="(.*?)"[^>]+>.*<figcaption>(.*?)<\/figcaption><\/figure>/g;

    return addApolloState(apolloClient, {
      props: {
        posts: data.projects.edges.map((edge: { node: any }) => {
          const images = [];
          let img;
          while ((img = imgRex.exec(edge.node.content))) {
            images.push({
              img: img[1],
              caption: img[2]
                .replace(`&#8217;`, "'")
                .replace(`&#8220;`, "'")
                .replace(`&#8221;`, "'"),
            });
          }

          return {
            title: edge.node.title,
            slug: edge.node.slug,
            images: images,
            excerpt: edge.node.project.excerpt,
            sourceURL: edge.node.project.sourceurl,
            githubURL: edge.node.project.githuburl,
            categories: edge.node.categories.nodes.map(
              (node: { name: string }) => node.name
            ),
          };
        }),
        numOfPages: cursors.length,
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
