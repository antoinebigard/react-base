import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./components/Layout";
import { Landing, NotFound, SignIn, Profile, ForceChangePassword } from "./pages";

import routes from "./routes.json";

import "./App.css";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path={routes.SIGNIN} component={SignIn} />
      <Route exact path={routes.PROFILE} component={Profile} />
      <Route exact path={routes.CHANGEPASSWORD} component={ForceChangePassword} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default withRouter(App);
