import React from "react";

import SignIn from "../../components/SignIn";

import "./landing.css";

export default () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <SignIn />
    </header>
  </div>
);
