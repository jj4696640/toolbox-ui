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
  if (approved.status === "active") {
    return true;
  } else {
    return false;
  }
};

function Layout() {
  return (
    <>
      {authenticated() && approved() ? (
        <>
          <Navbar />
          <div style={{minHeight: "100vh"}} className="d-flex">
            <Sidebar />
            <div className="w-75 m-5">
              <Outlet />
            </div>
          </div>
          <Footer />
        </>
      ) : !approved() ? (
        <Navigate to="/new-user" />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
