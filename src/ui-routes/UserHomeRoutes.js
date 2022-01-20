import React from "react";
import { Route } from "react-router";
import Loadable from "react-loadable";
import Loading from "../ui-molecules/Loading";

const Dashboard = Loadable({
  loader: () => import("../ui-pages/UserHome/components/Content/Dashboard"),
  loading: Loading
});

const ComingSoon = Loadable({
  loader: () =>
    import(
      "../ui-pages/UserHome/components/Content/Dashboard/components/ComingSoon"
    ),
  loading: Loading
});

const UserRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/user-home" component={Dashboard} />
      <Route exact path="/user-home/cfd-trading" component={ComingSoon} />
      <Route exact path="/user-home/trading-platform" component={ComingSoon} />
      <Route exact path="/user-home/trading-robots" component={ComingSoon} />
      <Route exact path="/user-home/ib-program" component={ComingSoon} />
      <Route exact path="/user-home/events" component={ComingSoon} />
      <Route exact path="/user-home/white-labeling" component={ComingSoon} />
    </React.Fragment>
  );
};

export default UserRoutes;
