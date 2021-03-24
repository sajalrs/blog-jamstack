import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { Post } from "./posts/[slug]";
import PostsList, { POSTS_PER_PAGE } from "../components/PostsList";
import { POSTS_CURSORS_QUERY, POSTS_QUERY } from "./posts/pages/[page]";
import { MENU_QUERY, MenuListItem } from "../components/Navbar";
import {
  PROJECTS_QUERY,
  PROJECTS_CURSORS_QUERY,
  PROJECT_CATEGORIES_QUERY,
} from "./projects/pages/[page]";
import { Project } from "./projects/pages/[page]";
import ProjectsList, { PROJECTS_PER_PAGE } from "../components/ProjectsList";
type Props = {
  posts?: Post[];
  projects?: Project[];
  errors?: string;
  numOfPostsPages: number;
  numOfProjectsPages: number;
  menuListItems: MenuListItem[];
};

const IndexPage = ({
  posts,
  projects,
  errors,
  numOfPostsPages,
  numOfProjectsPages,
  menuListItems,
}: Props) => {
  if (errors) {
    return (
      <Layout menuListItems={menuListItems} title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout menuListItems={menuListItems} title="Home">
      <ProjectsList
        projects={projects!}
        curDir="/projects"
        numOfPages={numOfProjectsPages}
        pageNumber={1}
      />

      <PostsList
        curDir="/posts"
        posts={posts!}
        pageNumber={1}
        numOfPages={numOfPostsPages}
      />
    </Layout>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();

    const postsCursors = await apolloClient
      .query({
        query: POSTS_CURSORS_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) => [
        res.data.posts.edges[0],
        ...res.data.posts.edges.filter(
          (_: string, index: number) => (index + 1) % POSTS_PER_PAGE === 0
        ),
      ]);

    const projectsCursors = await apolloClient
      .query({
        query: PROJECTS_CURSORS_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) => [
        res.data.projects.edges[0],
        ...res.data.projects.edges.filter(
          (_: string, index: number) => (index + 1) % PROJECTS_PER_PAGE === 0
        ),
      ]);

    const posts = await apolloClient
      .query({
        query: POSTS_QUERY,
        variables: {
          first: POSTS_PER_PAGE,
          last: null,
          after: null,
          before: null,
        },
        context: { clientName: "wordPress" },
      })
      .then((res) => res.data.posts);

    const projects = await apolloClient
      .query({
        query: PROJECTS_QUERY,
        variables: {
          first: PROJECTS_PER_PAGE,
          last: null,
          after: null,
          before: null,
        },
        context: { clientName: "wordPress" },
      })
      .then((res) => res.data.projects);

    const menuListItems = await apolloClient
      .query({
        query: MENU_QUERY,
        context: { clientName: "wordPress" },
      })
      .then((res) =>
        res.data.menuItems.nodes.map(
          (node: { label: string; url: string }) => ({
            title: node.label,
            pageURL: node.url,
          })
        )
      );

    const imgRex = /<figure.*>.*<img.*?src="(.*?)"[^>]+>.*<figcaption>(.*?)<\/figcaption><\/figure>/g;



    return addApolloState(apolloClient, {
      props: {
        projects:  await Promise.all(
          projects.edges.map(async (edge: { node: any }) => {
            const images = [];
            let img;
            while ((img = imgRex.exec(edge.node.content))) {
              images.push({
                img: img[1],
                caption: img[2]
                  .replace(`&#8217;`, "'")
                  .replace(`&#8220;`, "'")
                  .replace(`&#8221;`, "'"),
              });
            }
            const categories = edge.node.categories.edges.map(
              (edge: { node: { name: string } }) => edge.node.name
            );
    
            let hasNextPage = edge.node.categories.pageInfo.hasNextPage;
            let nextCursor = edge.node.categories.pageInfo.endCursor;
            while (hasNextPage) {
              const  {data} : any = await apolloClient.query({
                query: PROJECT_CATEGORIES_QUERY,
                variables: {
                  first: 10,
                  last: null,
                  after: nextCursor,
                  before: null,
                  slug: edge.node.slug,
                },
                context: { clientName: "wordPress" },
              });
    
              // console.log(data.projectsBy.pageInfo);
              categories.push(
                ...data.projectBy.categories.edges.map(
                  (edge: { node: { name: string } }) => edge.node.name
                )
              );
              hasNextPage = data.projectBy.categories.pageInfo.hasNextPage;
              nextCursor = data.projectBy.categories.pageInfo.endCursor;
            }
            // console.log(categories);
            // console.log(edge.node.categories);
            return {
              title: edge.node.title,
              slug: edge.node.slug,
              images: images,
              excerpt: edge.node.project.excerpt,
              sourceURL: edge.node.project.sourceurl,
              githubURL: edge.node.project.githuburl,
              categories,
            };
          })
        ),
        posts: posts.edges.map((edge: { node: Post }) => edge.node),
        numOfPostsPages: postsCursors.length,
        numOfProjectsPages: projectsCursors.length,
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
