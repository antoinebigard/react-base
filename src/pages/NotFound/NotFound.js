import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => (
  <div className="not-found">
    <div id="oopss">
      <div id="error-text">
        <span>404</span>
        <h1>PAGE NOT FOUND</h1>
        <p className="hmpg">
          <Link to="/" className="back">
            Back To Home
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default NotFound;
