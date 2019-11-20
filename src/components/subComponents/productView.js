import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: {
        card: {
          maxWidth: 345
        },
        media: {
          height: 140
        }
      }
    };
  }

  render() {
    return (
      <Card style={this.state.styling.card}>
        <CardActionArea>
          <CardMedia
            style={this.state.styling.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              DSLR 1234
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Rent Now
          </Button>
          <Button size="small" color="primary">
            Know More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ProductView;
