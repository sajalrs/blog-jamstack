import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import MediaCard from "../components/Card";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import PageNav from "../components/PageNav";

import {
  CURSORS_QUERY,
  POSTS_QUERY,
  ITEMS_PER_PAGE,
  NUM_OF_NAV_PAGES,
  Post,
} from "./[page]";

type Props = {
  posts?: Post[];
  errors?: string;
  numOfPages: number;
};

const IndexPage = ({ posts, errors, numOfPages }: Props) => {
  const router = useRouter();
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  // let navigablePages = [];
  // navigablePages.push(
  //   <IconButton
  //   disabled
  //     onClick={() => {
  //       router.push(`/`);
  //     }}
  //   >
  //     {1}
  //   </IconButton>
  // );
  // for (let i = 2; i <= Math.min(NUM_OF_NAV_PAGES, numOfPages); i++) {
  //   navigablePages.push(
  //     <IconButton
  //       onClick={() => {
  //         router.push(`/${i}`);
  //       }}
  //     >
  //       {i}
  //     </IconButton>
  //   );
  // }

  // if(numOfPages > NUM_OF_NAV_PAGES){
  //   navigablePages.push(
  //     <IconButton
  //       onClick={() => {
  //         router.push(`/${NUM_OF_NAV_PAGES + 1}`);
  //       }}
  //     >
  //       {"..."}
  //     </IconButton>
  //   );
  // }
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

        {/* {navigablePages}
          { numOfPages > 1 && 
          <IconButton
            onClick={() => {
              router.push(`/${2}`);
            }}
          >
            <NavigateNextIcon />
          </IconButton>
          }  */}

          <PageNav pageNumber={1} numOfPages={numOfPages}/>
      </div>
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
