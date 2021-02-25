import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { gql } from "@apollo/client";
import MediaCard from "../components/Card";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { FetchResult } from "apollo-link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export const POSTS_QUERY = gql`
  query postsQuery($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      edges {
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

type Post = {
  date: string;
  featuredImage: {
    title: string;
    sourceUrl: string;
  };
  title: string;
  author: {
    id: string;
  };
  id: string;
  slug: string;
  excerpt: string;
};

type Props = {
  posts?: Post[];
  errors?: string;
  numOfPages?: number;
};

// export const ID_QUERY = gql`
//   query IDQuery {
//     posts {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `;

export const CURSORS_QUERY = gql`
  query IDQuery {
    posts {
      edges {
        cursor
      }
    }
  }
`;

const ITEMS_PER_PAGE = 3;

const IndexPage = ({ posts, errors, numOfPages }: Props) => {
  const router = useRouter();
  const pageNumber = parseInt(router.query.page.toString()) ?? 1;
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
      <div className="flex flex-col items-center">
        {posts!.map((post: Post, index: number) => {
          return (
            <div className="m-4">
              <MediaCard
                key={index}
                title={post.title}
                description={post.excerpt || ""}
                imgTitle={post.title}
                imgURL={
                  post.featuredImage
                    ? post.featuredImage.sourceUrl
                    : "image_not_found.png"
                }
                cardWidth={345}
                imgHeight={140}
                link={`posts/${post.slug}`}
              />
            </div>
          );
        })}
        <div>
          {pageNumber !== 1 ? (
            <IconButton
              onClick={() => {
                router.push(`/${pageNumber - 1}`);
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          ) : null}

          {pageNumber !== numOfPages ? (
            <IconButton
              onClick={() => {
                router.push(`/${pageNumber + 1}`);
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: CURSORS_QUERY,
    context: { clientName: "wordPress" },
  });
  let paths = [];
  const numOfPages = Math.ceil(data.posts.edges.length / ITEMS_PER_PAGE);
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
        query: CURSORS_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) => [res.data.posts.edges[0],
        ...res.data.posts.edges.filter(
          (_: string, index: number) => (index+1) % ITEMS_PER_PAGE === 0
        )]
      );

    const { data } = await apolloClient.query({
      query: POSTS_QUERY,
      variables: {
        first: ITEMS_PER_PAGE,
        last: null,
        after: page === 1? null : cursors[page-1].cursor,
        before: null,
      },
      context: { clientName: "wordPress" },
    });

    return addApolloState(apolloClient, {
      props: { posts: data.posts.edges.map((edge: {node: Post}) => edge.node), numOfPages: cursors.length },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
