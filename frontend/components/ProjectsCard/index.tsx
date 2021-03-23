import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "../Carousel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import { Project } from "../../pages/projects/pages/[page]";

type Props = {
  project: Project;
  curDir?: string;
};

const ProjectsCard = ({ project, curDir }: Props) => {
  const router = useRouter();
  const { title, slug, images } = project;
  return (
    <Card>
      <CardContent>
        <Typography
          style={{ cursor: "pointer" }}
          variant="h3"
          component="h3"
          onClick={() => {
            router.push(`${curDir}/${slug}`);
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardContent>
        <Carousel images={images} />
      </CardContent>

      <CardActions>
        {/* <Button size="small" color="primary">
        Share
      </Button> */}
        <Button
          size="small"
          color="primary"
          onClick={() => {
            router.push(`${curDir}/${slug}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectsCard;
