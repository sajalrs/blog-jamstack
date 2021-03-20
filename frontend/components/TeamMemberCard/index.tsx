import React from "react";
import { TeamMember } from "../../pages/about";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Props = {
  teamMember: TeamMember;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBox: {
      backgroundColor: theme.palette.primary.dark,
      color: "#fff", 
    },
    title: {
      fontFamily: "Kalam"
    }
  })
);

const TeamMemberCard = ({ teamMember }: Props) => {
  const { name, description, image } = teamMember;
  const classes = useStyles();
  return (
    <Card>
      <CardContent
        className={`${classes.titleBox} flex justify-center items-center h-10`}
      >
        <Typography className={classes.title} variant="h5" component="h5">
          {name}
        </Typography>
      </CardContent>
      <div className="flex items-center flex-col md:flex-row ">
        <CardContent>
          <img
            className="w-32 rounded-full lg:w-48"
            src={image.sourceUrl}
          />
        </CardContent>
        <CardContent>
          <p className="prose">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
