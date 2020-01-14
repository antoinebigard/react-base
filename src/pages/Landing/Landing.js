import React from "react";

import SignIn from "../../components/Auth/SignIn";
import Profil from "../../components/Auth/Profil";

import "./landing.css";

export default () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <SignIn />
      <Profil />
    </header>
  </div>
);
