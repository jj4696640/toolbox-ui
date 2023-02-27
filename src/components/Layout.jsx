import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const authenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const approved = () => {
  const approved = JSON.parse(localStorage.getItem("user"));
  if (approved) {
    if (approved.status === "active") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

function Layout() {
  return (
    <>
      {authenticated() && approved() ? (
        <>
          <Navbar />
          <div style={{ minHeight: "100vh" }} className="row w-100">
            <div className="d-none d-md-block d-lg-block col-md-4 col-lg-2">
            <Sidebar />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-10 px-4 py-2">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      ) : !approved() ? (
        <Navigate to="/login" />
      ) : (
        <Navigate to="/new-user" />
      )}
    </>
  );
}

export default Layout;
