import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { gql } from "@apollo/client";
import MediaCard from "../components/Card";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";


export const ITEMS_PER_PAGE = 1;

export const NUM_OF_NAV_PAGES = 3;

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

export type Post = {
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
  numOfPages: number;
};


export const CURSORS_QUERY = gql`
  query IDQuery {
    posts {
      edges {
        cursor
      }
    }
  }
`;


const IndexPage = ({ posts, errors, numOfPages }: Props) => {
  const router = useRouter();
  const pageNumber = parseInt(router.query.page.toString());

  let navigablePages = [];
  let start = (NUM_OF_NAV_PAGES * (Math.ceil(pageNumber/NUM_OF_NAV_PAGES)-1))+1
  let end = Math.min(NUM_OF_NAV_PAGES * Math.ceil(pageNumber/NUM_OF_NAV_PAGES), numOfPages-1);
  
  if(start !== 1){
    navigablePages.push(
      <IconButton
        onClick={() => {
          router.push(`/${start - 1}`);
        }}
      >
        {"..."}
      </IconButton>
    );
  }

  for (let i = start;i <= end; i++) {

    if(i === 1){
      navigablePages.push(
        <IconButton
          onClick={() => {
            router.push(`/`);
          }}
        >
          1
        </IconButton>
      );
    } else {
      navigablePages.push(
        <IconButton
          onClick={() => {
            router.push(`/${i}`);
          }}
        >
          {i}
        </IconButton>
      );
    }


  }

  if(end < numOfPages - 1){
    navigablePages.push(
      <IconButton
        onClick={() => {
          router.push(`/${end + 1}`);
        }}
      >
        {"..."}
      </IconButton>
    );
  }

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
          <IconButton
            onClick={() => {
              router.push(pageNumber === 2 ? "/" : `/${pageNumber - 1}`);
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          {navigablePages}
          {pageNumber !== numOfPages - 1 ? (
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
  for (let i = 2; i <= numOfPages; i++) {
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
        after: cursors[page - 1].cursor,
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
