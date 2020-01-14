import React from "react";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
