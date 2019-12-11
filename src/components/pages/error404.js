import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

class Error404 extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {
        padding: "40px"
      }
    };
  }
  render() {
    return (
      <div>
        <Grid container style={this.state.style}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom align="left">
              Error 404
            </Typography>
            <Divider
              light
              variant="middle"
              style={{
                backgroundColor: "rgba(183, 28, 28,0.9)",
                width: "40%",
                height: "5px"
              }}
            />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Error404;
