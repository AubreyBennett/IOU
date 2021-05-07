import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
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
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/transaction"
              className={window.location.pathname === "/transaction" ? "nav-link active" : "nav-link"}
            >
              Transactions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newgroup"
              className={window.location.pathname === "/newgroup" ? "nav-link active" : "nav-link"}
            >
              New Group
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/grouppage"
              className={window.location.pathname === "/grouppage" ? "nav-link active" : "nav-link"}
            >
              Group Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/invitepage"
              className={window.location.pathname === "/invitepage" ? "nav-link active" : "nav-link"}
            >
              Invite Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;