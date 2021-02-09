import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

type Props = {
  title: string;
  description: string;
  imgTitle: string;
  imgURL: string;
  cardWidth: number;
  imgHeight: number;
};

const MediaCard = ({
  title,
  description,
  imgTitle,
  imgURL,
  cardWidth,
  imgHeight,
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
        color: theme.palette.text.secondary
      },
    })
  );
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgURL} title={imgTitle} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
