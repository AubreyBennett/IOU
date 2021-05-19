import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// need to add to App.js page
function Loginnav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/dashboard">
        IOU
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          </ul>
      </div>
    </nav>
  );
}

export default Loginnav;