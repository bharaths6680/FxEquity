import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const menuItems = [
  {
    name: "Home",
    route: "/user-home"
  },
  {
    name: "CFD Trading",
    route: "/user-home/cfd-trading"
  },
  {
    name: "Trading Platform",
    route: "/user-home/trading-platform"
  },
  {
    name: "Trading Robots",
    route: "/user-home/trading-robots"
  },
  {
    name: "IB Program",
    route: "/user-home/ib-program"
  },
  {
    name: "Events and Impacts",
    route: "/user-home/events"
  },
  {
    name: "White Labeling",
    route: "/user-home/white-labeling"
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    background: "#3F3F3F",
    padding: "0px 20px"
  },
  tab: {
    fontFamily: "RobotoMedium",
    fontSize: "14px",
    "& .MuiTab-root": {
      fontFamily: "RobotoMedium",
      fontSize: "14px",
      fontWeight: "500",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "1.43",
      letterSpacing: "normal",
      color: "#e7dddd",
      textTransform: "none",
      width: "auto"
    },
    "& .Mui-selected": {
      color: "#fff",
      opacity: 1
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#ff9600",
      height: 4,
      width: "auto"
    }
  }
});

class Menu extends React.Component {
  state = {
    value: 0
  };

  componentDidMount = () => {
    this.props.history.push(`${menuItems[0].route}`);
  };
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(`${menuItems[value].route}`);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          className={classes.tab}
        >
          {menuItems.map((item, index) => (
            <Tab label={item.name} value={index} key={index} />
          ))}
        </Tabs>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);
