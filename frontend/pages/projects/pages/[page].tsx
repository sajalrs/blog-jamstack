import Layout from "../../../components/Layout";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import PostsList, { ITEMS_PER_PAGE } from "../../../components/PostsList";
import { Post } from "../[slug]";
import { MENU_QUERY, MenuListItem } from "../../../components/Navbar";

export const PROJECTS_QUERY = gql`
  query projectsQuery($first: Int, $last: Int, $after: String, $before: String) {
    projects(first: $first, last: $last, after: $after, before: $before) {
      edges {
        node {
          date
          featuredImage {
            node {
              title
              sourceUrl
            }
          }
          title
          id
          slug
        }
      }
    }
  }
`;

type Props = {
  posts?: Post[];
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
      <Layout
        title="Error | Next.js + TypeScript Example"
        menuListItems={menuListItems}
      >
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }
  return (
    <Layout
      title="Home | Next.js + TypeScript Example"
      menuListItems={menuListItems}
    >
      <PostsList
        curDir=".."
        posts={posts!}
        pageNumber={pageNumber}
        numOfPages={numOfPages}
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
  const numOfPages = Math.ceil(data.projects.edges.length / ITEMS_PER_PAGE);
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
          (_: string, index: number) => (index + 1) % ITEMS_PER_PAGE === 0
        ),
      ]);

    const { data } = await apolloClient.query({
      query: PROJECTS_QUERY,
      variables: {
        first: ITEMS_PER_PAGE,
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

    return addApolloState(apolloClient, {
      props: {
        posts: data.projects.edges.map((edge: { node: Post }) => edge.node),
        numOfPages: cursors.length,
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
