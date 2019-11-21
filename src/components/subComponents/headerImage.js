import React from "react";
import Background from "../../../public/images/banners/wideAngle.jpg";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/Camera";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "auto"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  rotateLogo: {
    animation: "spin 4s linear infinite"
  },
  divider: {
    height: 28,
    margin: 4
  },
  title: {
    color: "#fff"
  }
}));

export default function CarouselView() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        height: "60vh",
        display: "flex"
      }}
    >
      <Grid
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ margin: "auto" }}
      >
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <CameraIcon className={classes.rotateLogo} />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search items.."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}
