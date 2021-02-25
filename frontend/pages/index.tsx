import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import MediaCard from "../components/Card";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { FetchResult } from "apollo-link";

export const POSTS_QUERY = gql`
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
          slug
          excerpt
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 3;

const updateQuery = (
  previousResult: FetchResult,
  { fetchMoreResult }: { fetchMoreResult?: any }
) => {
  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
};

const IndexPage = () => {
  const { loading, data, networkStatus, fetchMore } = useQuery(POSTS_QUERY, {
    context: { clientName: "wordPress" },
    variables: {
      first: ITEMS_PER_PAGE,
      last: null,
      after: null,
      before: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  const loadingArticle = networkStatus === NetworkStatus.fetchMore;
  const { posts } = data;
  console.log(posts.pageInfo.hasPreviousPage);
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
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <div className="flex flex-col items-center">
          {posts.edges.map((edge: any, index: number) => {
            const { node } = edge;
            return (
              <div className="m-4">
                <MediaCard
                  key={index}
                  title={node.title}
                  description={node.excerpt || ""}
                  imgTitle={node.title}
                  imgURL={
                    node.featuredImage
                      ? node.featuredImage.sourceUrl
                      : "image_not_found.png"
                  }
                  cardWidth={345}
                  imgHeight={140}
                  link={`posts/${node.slug}`}
                />
              </div>
            );
          })}
          <div>
           
              <IconButton
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: null,
                      after: null,
                      last: ITEMS_PER_PAGE,
                      before: posts.pageInfo.startCursor || null,
                    },
                    updateQuery,
                  });
                }}
              >
                <NavigateBeforeIcon />
              </IconButton>
    

            
              <IconButton
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: ITEMS_PER_PAGE,
                      after: posts.pageInfo.endCursor || null,
                      last: null,
                      before: null,
                    },
                    updateQuery,
                  });
                }}
              >
                <NavigateNextIcon />
              </IconButton>
            
          </div>
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
    variables: {
      first: ITEMS_PER_PAGE,
      last: null,
      after: null,
      before: null,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default IndexPage;
