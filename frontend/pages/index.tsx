import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { Post } from "../interfaces";
import PostsList, {ITEMS_PER_PAGE } from "../components/PostsList";
import { CURSORS_QUERY, POSTS_QUERY} from "./posts/pages/[page]";

type Props = {
  posts?: Post[];
  errors?: string;
  numOfPages: number;
};

const IndexPage = ({ posts, errors, numOfPages }: Props) => {
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
    <Layout title="Home | Next.js + TypeScript Example">
      <PostsList curDir="/posts" posts={posts!} pageNumber={1} numOfPages={numOfPages} />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();

    const cursors = await apolloClient
      .query({
        query: CURSORS_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) => [
        res.data.posts.edges[0],
        ...res.data.posts.edges.filter(
          (_: string, index: number) => (index + 1) % ITEMS_PER_PAGE === 0
        ),
      ]);

    const { data } = await apolloClient.query({
      query: POSTS_QUERY,
      variables: {
        first: ITEMS_PER_PAGE,
        last: null,
        after: null,
        before: null,
      },
      context: { clientName: "wordPress" },
    });

    return addApolloState(apolloClient, {
      props: {
        posts: data.posts.edges.map((edge: { node: Post }) => edge.node),
        numOfPages: cursors.length,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
