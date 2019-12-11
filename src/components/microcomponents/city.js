import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

export default function City(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="{props.cityName}"
        src={props.cityImg}
        className={classes.bigAvatar}
      />
      <br />
      <Typography variant="p" gutterBottom style={{ textAlign: "center" }}>
        {props.cityName}
      </Typography>
    </Grid>
  );
}
