import React from "react";
import { Project } from "../../pages/projects/[slug]";
import PageNav from "../../components/PageNav";
import ProjectsCard from "../../components/ProjectsCard";
import Typography from "@material-ui/core/Typography";
type Props = {
  projects: Project[];
  pageNumber: number;
  numOfPages: number;
  curDir?: string;
};

export const ITEMS_PER_PAGE = 9;
const ProjectsList = ({ projects, pageNumber, numOfPages, curDir }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2">Projects</Typography>
      {projects!.map((project: Project, index: number) => {
        return (
          <div className="m-4">
            <ProjectsCard key={index} project={project} curDir={curDir} />
          </div>
        );
      })}

      <PageNav pageNumber={pageNumber} numOfPages={numOfPages} />
    </div>
  );
};

export default ProjectsList;
