import React from "react";
import { Link } from "react-router-dom";

function NewPassword() {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{ width: "35%" }}
    >
      <p className="h3 text-center fw-bold">Change Password</p>
      <p className="small text-center">Enter your new password.</p>
      <form>
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
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <input
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              aria-describedby="confirmPasswordHelp"
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="small text-center">
          Do not have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Register
          </Link>
        </p>
        <p className="small text-center">
          Remembered your password?
          <Link href="/login" className="text-decoration-none">
            {" "}
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default NewPassword;
