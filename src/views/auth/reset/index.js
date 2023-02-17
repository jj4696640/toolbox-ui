import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{width: "35%"}}
    >
      <p className="h3 text-center fw-bold">Password Reset</p>
      <p className="small text-center">
        Please enter the email address you used to create the account and a
        phone number for verification before we can reset your password.
      </p>
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
            <label htmlFor="telephone" className="form-label">
              Telephone <span className="text-danger">*</span>
            </label>
            <input
              type="telephone"
              className="form-control"
              id="telephone"
              aria-describedby="telephoneHelp"
              required
              placeholder="+256772123456"
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
          <Link to="/login" className="text-decoration-none">
            {" "}
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default ResetPassword;
