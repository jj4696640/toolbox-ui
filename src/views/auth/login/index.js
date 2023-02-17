import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{ width: "35%" }}
    >
      <p className="h3 text-center fw-bold">Sign In</p>
      <p className="small text-center">Sign in with your email and password.</p>
      <form>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
              placeholder="john.doe@email.com"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <p className="small text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Register
          </Link>
        </p>
        <p className="small text-center">
          <Link to="/reset-password" className="text-decoration-none">
            Forgotten password?
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
