import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import MediaCard from "../components/Card";
export const POSTS_QUERY = gql`
  query postsQuery {
    posts {
      nodes {
        date
        featuredImage {
          title
          sourceUrl
        }
        title
        author {
          id
        }
        id
        excerpt
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
  if (loading && !loadingArticle) {
    return (
      <Layout title="Loading | Next.js + TypeScript Example">
        <MediaCard
          title={"Loading..."}
          description={"Loading..."}
          imgTitle={"Loading"}
          imgURL={"loading.gif"}
          cardWidth={345}
          imgHeight={140}
          link={`/`}
        />
        ))
      </Layout>
    );
  } else {
    const posts = data.posts.nodes;
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="flex flex-col items-center">
        {posts.map((item: any, index: number) => (
          

          <div className="m-4">
<MediaCard
            key={index}
            title={item.title}
            description={item.excerpt || ""}
            imgTitle={item.title}
            imgURL={item.featuredImage? item.featuredImage.sourceUrl : "image_not_found.png"}
            cardWidth={345}
            imgHeight={140}
            link={`posts/${item.id}`}
          />
          </div>
        ))}
        </div>
        
      </Layout>
    );
  }
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
