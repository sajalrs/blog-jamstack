import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Carousel from "../Carousel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import { Project } from "../../pages/projects/pages/[page]";
import Link from "next/link";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import GitHubIcon from "@material-ui/icons/GitHub";
type Props = {
  project: Project;
  curDir?: string;
};

const ProjectsCard = ({ project, curDir }: Props) => {
  const router = useRouter();
  const {
    title,
    slug,
    images,
    excerpt,
    githubURL,
    sourceURL,
    categories,
  } = project;
  const urlRegex = /(https:\/\/(www.)?)|([\/])$/g;
  return (
    <Card className="max-w-sm md:max-w-4xl">
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
        {githubURL && (
          <div>
            <Link href={githubURL}>
              <a className={"text-base flex items-center w-min"}>
                <div className="mr-2">
                  <GitHubIcon />
                </div>
                <div
                  className={
                    "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  }
                >
                  {githubURL.replace(urlRegex, "")}
                </div>
              </a>
            </Link>
          </div>
        )}

        {sourceURL && (
          <div>
            <Link href={sourceURL}>
              <a className={"text-base flex items-center w-min"}>
                <div className="mr-2">
                  <ExitToAppIcon />
                </div>
                <div
                  className={
                    "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  }
                >
                  {sourceURL.replace(urlRegex, "")}
                </div>
              </a>
            </Link>
          </div>
        )}
      </CardContent>
      <CardContent>
        {categories.map((category) => 
          (<Button color="primary" variant="contained" style={{margin: "0.25rem", borderRadius: "1rem"}} component="div" onClick={() => {}}>{category}</Button>)
        )}
      </CardContent>
      <CardContent >
        <Carousel images={images} />
      </CardContent>
      <CardContent>
        <div
          className={`min-w-full prose`}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
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
