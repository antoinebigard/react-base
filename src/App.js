import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, NotFound, SignIn, Profile, ForceChangePassword } from "./pages";

import routes from "./routes.json";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path={routes.SIGNIN} component={SignIn} />
        <Route exact path={routes.PROFILE} component={Profile} />
        <Route exact path={routes.CHANGEPASSWORD} component={ForceChangePassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
