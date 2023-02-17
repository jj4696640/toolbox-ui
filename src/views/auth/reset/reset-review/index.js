import React from "react";
import { Link } from "react-router-dom";

function PasswordResetReview() {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{ width: "35%" }}
    >
      <p className="h3 text-center fw-bold">Password Reset Request</p>
      <p className="text-center">
        A password reset request has been sent. Our team will verify your
        request and once approved, password reset link will be sent to your
        valid email.
      </p>
      <p className="text-center">
        To fasttrack your request, you can write to{" "}
        <span className="fw-bold">support@toolbox.co.ug</span> or call{" "}
        <span className="fw-bold">+256772123456</span>.
      </p>

      <p className="small text-center">
        Do not have an account?{" "}
        <Link to="/register" className="text-decoration-none">
          Register
        </Link>
      </p>
      <p className="small text-center">
        Have an account
        <Link to="/login" className="text-decoration-none">
          {" "}
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default PasswordResetReview;
