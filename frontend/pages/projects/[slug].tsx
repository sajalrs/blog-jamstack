import Layout from "../../components/Layout";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from "next";
import Typography from "@material-ui/core/Typography";
import { MENU_QUERY, MenuListItem } from "../../components/Navbar";
import projectStyles from "./project.module.scss";
const PROJECT_QUERY = gql`
  query ProjectQuery($slug: String!) {
    projectBy(slug: $slug) {
      title
      content
    }
  }
`;

export const PROJECTS_SLUG_QUERY = gql`
  query projectsQuery(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    projects(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          slug
        }
      }
    }
  }
`;

export type Post = {
  title: string;
  content: string;
  author: {
    nickname: string;
  };
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
};

export type Project = {
  date: string;
  title: string;
  slug: string;
  images: { img: string; caption: string }[];
  excerpt: string;
  githubURL: string;
  sourceURL: string;
};

type Props = {
  post?: Post;
  errors?: string;
  menuListItems: MenuListItem[];
};

const Post = ({ post, errors, menuListItems }: Props) => {
  if (errors) {
    return (
      <Layout
        menuListItems={menuListItems}
        title="Error | Next.js + TypeScript Example"
      >
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        post ? post.title : "Project Detail"
      }`}
      menuListItems={menuListItems}
    >
      <div
        className={
          "flex justify-center items-center max-w-full m-1 md:m-4 overflow-x-hidden"
        }
      >
        <div className="prose prose-xl max-w-sm md:max-w-4xl">
          <Typography gutterBottom variant="h5" component="h2">
            {post?.title}
          </Typography>
          <div
            // eslint-disable-next-line react/no-danger
            className={projectStyles.project}
            dangerouslySetInnerHTML={{
              __html: post?.content!!,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users

  const apolloClient = initializeApollo();
  let paths = [];
  let hasNextPage;
  let nextCursor = null;
  do {
    const { data }: any = await apolloClient.query({
      query: PROJECTS_SLUG_QUERY,
      variables: {
        first: 10,
        last: null,
        after: nextCursor,
        before: null,
      },
      context: { clientName: "wordPress" },
    });
    paths.push(
      ...data.projects.edges.map((edge: any) => ({
        params: { slug: edge.node.slug.toString() },
      }))
    );
    hasNextPage = data.projects.pageInfo.hasNextPage;
    nextCursor = data.projects.pageInfo.endCursor;
  } while (hasNextPage);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;

    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
      query: PROJECT_QUERY,
      variables: { slug },
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

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return addApolloState(apolloClient, {
      props: { post: data.projectBy, menuListItems },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
