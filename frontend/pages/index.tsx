import Link from "next/link";
import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { gql, useQuery, NetworkStatus } from "@apollo/client";

export const POSTS_QUERY = gql`
  query postsQuery {
    posts {
      nodes {
        id
        title
      }
    }
  }
`;

const IndexPage = () => {
  const { loading, data, networkStatus } = useQuery(POSTS_QUERY, {
    context: { clientName: "wordPress" },
    notifyOnNetworkStatusChange: true,
  });

  const loadingArticle = networkStatus === NetworkStatus.fetchMore;

  let posts;
  if (loading && !loadingArticle) {
    posts = [];
  } else {
    posts = data.posts.nodes;
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      {posts.map((item: any) => (<p>{item.title}</p>))}
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: POSTS_QUERY,
    context: { clientName: "wordPress" },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default IndexPage;
