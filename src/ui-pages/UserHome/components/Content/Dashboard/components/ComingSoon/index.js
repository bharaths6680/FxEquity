import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  header: {
    fontFamily: "RobotoBold",
    fontSize: "52px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff"
  },
  header1: {
    fontFamily: "RobotoBold",
    padding: "16px 40px",
    fontSize: "38px",
    fontWeight: "bold",
    fontStretch: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#969696",
    fontStyle: "italic"
  }
});

const ComingSoon = ({ classes }) => {
  return (
    <Grid style={{ width: "100%", textAlign: "center", padding: "40px 0px " }}>
      <Typography className={classes.header}>Coming Soon!</Typography>
      <Typography className={classes.header1}>
        Thank you for your interest
      </Typography>
      <img
        src={"ui-assets/images/coming-soon.svg"}
        alt="comingSoon"
        width={"100%"}
      />
    </Grid>
  );
};
export default withStyles(styles)(ComingSoon);
