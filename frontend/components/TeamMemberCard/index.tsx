import React from "react";
import { TeamMember } from "../../pages/about";

type Props = {
  teamMember: TeamMember;
}

const TeamMemberCard = ({teamMember}: Props) => {
  const { name, description, image } = teamMember;
  return (
    <div>
      <div>{name}</div>
      <p>{description}</p>
      <img className="w-16 rounded-full md:w-32 lg:w-48" src={image.sourceUrl}/>
    </div>
  );
};

export default TeamMemberCard;
