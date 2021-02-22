import Layout from "../../components/Layout";
import { initializeApollo } from "../../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from "next";
import Typography from "@material-ui/core/Typography";
const POST_QUERY = gql`
  query PostQuery($id: ID!) {
    postBy(id: $id) {
      title
      content
      author {
        nickname
      }
    }
  }
`;

export const POSTS_ID_QUERY = gql`
  query postsQuery {
    posts {
      nodes {
        id
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
};

const StaticPropsDetail = ({ post, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
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
    >
      <div className="flex justify-center items-center max-w-full">
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

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users

  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: POSTS_ID_QUERY,
    context: { clientName: "wordPress" },
  });

  const paths = data.posts.nodes.map((node: { id: string }) => ({
    params: { id: node.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;

    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
      query: POST_QUERY,
      variables: { id },
      context: { clientName: "wordPress" },
    });

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { post: data.postBy } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
