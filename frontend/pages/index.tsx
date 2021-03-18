import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { Post } from "./posts/[slug]";
import PostsList, { ITEMS_PER_PAGE } from "../components/PostsList";
import { CURSORS_QUERY, POSTS_QUERY } from "./posts/pages/[page]";
import { MENU_QUERY, MenuListItem } from "../components/Navbar";
type Props = {
  posts?: Post[];
  errors?: string;
  numOfPages: number;
  menuListItems: MenuListItem[];
};

const IndexPage = ({ posts, errors, numOfPages, menuListItems }: Props) => {
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
      menuListItems={menuListItems}
      title="Home | Next.js + TypeScript Example"
    >
      <PostsList
        curDir="/posts"
        posts={posts!}
        pageNumber={1}
        numOfPages={numOfPages}
      />
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

    const menuListItems = await apolloClient
      .query({
        query: MENU_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) =>{
        // console.log(res.data.menuItems.edges)
        return res.data.menuItems.edges.map((edge) => ({title: edge.node.label, pageURL: edge.node.url}))      
      
      } 
        );
        

      // res.data.menuItems.edges.map(
      //   (node) => ({
      //     title: node.label,
      //     pageURL: node.url,
      //   })
      // )


    return addApolloState(apolloClient, {
      props: {
        posts: data.posts.edges.map((edge: { node: Post }) => edge.node),
        numOfPages: cursors.length,
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
