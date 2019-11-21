import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Camera from "./../../../public/images/products/camera-1.jpeg";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div style={{ padding: "20%" }}>
          <CardMedia
            component="img"
            alt="Camera"
            height="100%"
            image={Camera}
            title="Camera"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Canon Camera
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
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
}
