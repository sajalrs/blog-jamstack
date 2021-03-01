import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Props = {
  title: string;
  description: string;
  imgTitle: string;
  imgURL: string;
  cardWidth: number;
  imgHeight: number;
  link: string;
};

const MediaCard = ({
  title,
  description,
  imgTitle,
  imgURL,
  cardWidth,
  imgHeight,
  link,
}: Props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: cardWidth,
      },
      media: {
        height: imgHeight,
      },
      description: {
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
      },
    })
  );
  const classes = useStyles();
  const router = useRouter();
  return (
    <Card className={classes.root}>
        <CardActionArea
          onClick={() => {
            router.push(link);
          }}
        >
          <CardMedia
            className={classes.media}
            image={imgURL}
            title={imgTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          Share
        </Button> */}
          <Button
            size="small"
            color="primary"
            onClick={() => {
              router.push(link);
            }}
          >
            Learn More
          </Button>
        </CardActions>
    </Card>
  );
};

export default MediaCard;
