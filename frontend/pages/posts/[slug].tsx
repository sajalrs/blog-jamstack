import Layout from "../../components/Layout";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from "next";
import Typography from "@material-ui/core/Typography";
import { MENU_QUERY, MenuListItem } from "../../components/Navbar";
import postStyles from "./post.module.scss";
const POST_QUERY = gql`
  query PostQuery($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      author {
        nickname
      }
    }
  }
`;

export const POSTS_SLUG_QUERY = gql`
  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
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

type Post = {
  __typename: string;
  title: string;
  content: string;
  author: {
    nickname: string;
  };
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
        post ? post.title : "User Detail"
      } | Next.js + TypeScript Example`}
      menuListItems={menuListItems}
    >
      <div
        className={`${postStyles["post"]} flex justify-center items-center max-w-full`}
      >
        <div className="m-4 max-w-4xl">
          <Typography gutterBottom variant="h5" component="h2">
            {post?.title}
          </Typography>
          <div
            // eslint-disable-next-line react/no-danger
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
      query: POSTS_SLUG_QUERY,
      variables: {
        first: 10,
        last: null,
        after: nextCursor,
        before: null,
      },
      context: { clientName: "wordPress" },
    });
    paths.push(
      ...data.posts.edges.map((edge: any) => ({
        params: { slug: edge.node.slug.toString() },
      }))
    );
    hasNextPage = data.posts.pageInfo.hasNextPage;
    nextCursor = data.posts.pageInfo.endCursor;
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
      query: POST_QUERY,
      variables: { slug },
      context: { clientName: "wordPress" },
    });

    const menuListItems = await apolloClient
      .query({
        query: MENU_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) =>
        res.data.headerMenu.map(
          (item: { url: string; label: string; type: string }) => ({
            title: item.label,
            pageURL: item.url,
          })
        )
      );

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return addApolloState(apolloClient, {
      props: { post: data.postBy, menuListItems },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
