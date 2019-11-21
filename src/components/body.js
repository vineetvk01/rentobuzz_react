import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderImage from "./subComponents/headerImage";
import CategoryBox from "./subComponents/categoryBox";
import adventure from "./../../public/images/categories/adventure.png";
import laptop from "./../../public/images/categories/laptop.png";
import camera from "./../../public/images/categories/camera.png";
import { Typography, Divider } from "@material-ui/core";
import ProductView from "./subComponents/productView";
import CustomerReview from "./subComponents/customerReviews";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import IconBreadcrumbs from "./microcomponents/breadCrums";
import ProductCard from "./microcomponents/productsItem";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "0px 10%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Divider />
            <IconBreadcrumbs />
            <Divider />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
          <Grid item xs={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Body;
