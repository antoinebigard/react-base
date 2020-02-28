import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import WebFont from "webfontloader";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { Landing, NotFound, SignIn, Profile, ForceChangePassword } from "./pages";

import routes from "./routes.json";

import "./App.css";
WebFont.load({ google: { families: ["Josefin Sans: 200, 300, 400, 600, 700", "Raleway"] } });

const App = () => (
  <Layout>
    <ScrollToTop />
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
