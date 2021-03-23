import Layout from "../components/Layout";
import { initializeApollo, addApolloState } from "../lib/apolloClient";
import { GetStaticProps } from "next";
import { MENU_QUERY, MenuListItem } from "../components/Navbar";
import { gql } from "@apollo/client";
import TeamMemberCard from "../components/TeamMemberCard";
export const TEAM_MEMBERS_QUERY = gql`
  query teamMembersQuery(
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    teamMembers(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          teamMember {
            description
            name
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export type TeamMember = {
  name: string;
  description: string;
  image: {
    sourceUrl: string;
  };
};

type Props = {
  errors?: string;
  menuListItems: MenuListItem[];
  teamMembers: TeamMember[];
};

const AboutPage = ({ errors, menuListItems, teamMembers }: Props) => {
  if (errors) {
    return (
      <Layout
        menuListItems={menuListItems}
        title="Error"
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
      title="About"
    >
      <div
        className={
          "flex flex-col justify-center items-center max-w-full m-1 md:m-4 overflow-x-hidden"
        }
      >
        {teamMembers.map((teamMember) => {
          return <TeamMemberCard teamMember={teamMember} />;
        })}
      </div>
    </Layout>
  );
};

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo();
    let teamMembers = [];
    let hasNextPage;
    let nextCursor = null;
    do {
      const { data }: any = await apolloClient.query({
        query: TEAM_MEMBERS_QUERY,
        variables: {
          first: 10,
          last: null,
          after: nextCursor,
          before: null,
        },
        context: { clientName: "wordPress" },
      });

      teamMembers.push(
        ...data.teamMembers.edges.map(
          (edge: { node: { teamMember: TeamMember } }) => edge.node.teamMember
        )
      );
      hasNextPage = data.teamMembers.pageInfo.hasNextPage;
      nextCursor = data.teamMembers.pageInfo.endCursor;
    } while (hasNextPage);
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

    return addApolloState(apolloClient, {
      props: {
        teamMembers,
        menuListItems,
      },
    });
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
