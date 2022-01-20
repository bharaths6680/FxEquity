import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Menu from "./components/Menu";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import UserRoutes from "../../../../ui-routes/UserHomeRoutes";
import { Box } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#080808"
  },
  toolbar: {
    display: "inline-block",
    padding: 0
  },
  webHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    flexGrow: 1,
    padding: "0px 20px"
  },
  avatar: {
    marginRight: "16px"
  },
  content: {
    display: "flex",
    width: "100%",
    height: "100%",
    background: "#080808",
    padding: "124px 0px 20px 0px"
  },
  userDetails: {
    color: "black",
    display: "flex",
    margin: "0 1%",
    alignItems: "center",
    paddingTop: "2px"
  },
  openAccount: {
    fontFamily: "RobotoMedium",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff",
    textTransform: "uppercase",
    backgroundColor: "#e74242",
    "&:hover": {
      backgroundColor: "#e74242",
      opacity: 1
    },
    margin: "0px 20px"
  },
  loginButton: {
    fontFamily: "RobotoMedium",
    fontSize: "14px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.43",
    letterSpacing: "normal",
    color: "#fff",
    textTransform: "none"
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, history, login } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.webHeader}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="ui-assets/images/fx-logo.svg"
                  alt="logo"
                  style={{ padding: "15px 0", width: 150 }}
                />
              </div>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button className={classes.openAccount}>Open Account</Button>
                <img src={"ui-assets/images/profile.svg"} alt="profile" />
                <Button
                  className={classes.loginButton}
                  onClick={e => {
                    window.localStorage.clear();
                    history.push("/");
                    window.location.reload();
                  }}
                >
                  Login/Register
                </Button>
              </Box>
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex", sm: "flex", xl: "flex" }
              }}
            >
              <Menu history={history} />
            </Box>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <UserRoutes />
        </div>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { userInfo = {}, login = {} } = preparedFinalObject;
  const { user = {} } = userInfo;
  return { user, login };
};

export default withRouter(
  withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, null)(MiniDrawer)
  )
);
