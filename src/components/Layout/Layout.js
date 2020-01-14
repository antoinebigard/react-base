import React from "react";

import TopBar from "../TopBar";
import Footer from "../Footer";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="App">
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
