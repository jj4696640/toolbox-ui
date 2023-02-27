import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="p-2 border-end" style={{height: "100%"}}>
      <p className="h3 text-center fw-bold border-bottom">
        <Link className="nav-link" to="/">
          Dashboard
        </Link>
      </p>
      <p className="h5 fw-bold text-secondary sidebar-menu-toggle">
        <i className="bi bi-people-fill"></i> &nbsp; Profiles
      </p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/suspects">
            Suspects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create-new">
            Add New Suspect
          </Link>
        </li>
      </ul>
      <p className="h5 fw-bold text-secondary sidebar-menu-toggle">
        <i className="bi bi-gear-fill"></i> &nbsp; Settings
      </p>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/users">
            Users
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
}

export default Sidebar;
