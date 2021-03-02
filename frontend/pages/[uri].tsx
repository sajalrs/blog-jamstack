import Layout from "../components/Layout";
import { addApolloState, initializeApollo } from "../lib/apolloClient";
import { gql } from "@apollo/client";
import { GetStaticProps, GetStaticPaths } from "next";
import Typography from "@material-ui/core/Typography";
import pageStyles from "./page.module.scss";
import { MENU_QUERY, MenuListItem } from "../components/Navbar";
const PAGES_QUERY = gql`
  query PagesQuery($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
    }
  }
`;

export const PAGES_SLUG_QUERY = gql`
  query pagesQuery($first: Int, $last: Int, $after: String, $before: String) {
    pages(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          uri
        }
      }
    }
  }
`;

type Page = {
  __typename: string;
  title: string;
  content: string;
};

type Props = {
  page?: Page;
  errors?: string;
  menuListItems: MenuListItem[];
};

const Page = ({ page, errors, menuListItems }: Props) => {
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
      title={`${
        page ? page.title : "User Detail"
      } | Next.js + TypeScript Example`}
    >
      <div
        className={`${pageStyles["page"]} flex justify-center items-center max-w-full`}
      >
        <div className="m-4 max-w-4xl">
          <Typography gutterBottom variant="h5" component="h2">
            {page?.title}
          </Typography>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: page?.content!!,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users

  const apolloClient = initializeApollo();
  let paths = [];
  let hasNextPage;
  let nextCursor = null;
  do {
    const { data }: any = await apolloClient.query({
      query: PAGES_SLUG_QUERY,
      variables: {
        first: 10,
        last: null,
        after: nextCursor,
        before: null,
      },
      context: { clientName: "wordPress" },
    });
    console.log(data.pages.edges[0].node.uri.toString());
    paths.push(
      ...data.pages.edges.map((edge: any) => ({
        params: { uri: edge.node.uri.toString() },
      }))
    );
    hasNextPage = data.pages.pageInfo.hasNextPage;
    nextCursor = data.pages.pageInfo.endCursor;
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
    const uri = params?.uri;

    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
      query: PAGES_QUERY,
      variables: { uri },
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
      props: { page: data.pageBy, menuListItems },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
