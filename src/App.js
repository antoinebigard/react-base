import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, NotFound } from "./pages";

//import routes from "../routes.json";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
