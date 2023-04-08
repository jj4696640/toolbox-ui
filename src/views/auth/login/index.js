import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../axios";

function Login() {
  const navigate = useNavigate();

  // form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error handling
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  // close alert
  const closeAlert = () => {
    setError(false);
    setMessage("");
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/users/login", { email, password })
      .then(({data}) => {
        if (data.status) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          if (data.user.status === "active") {
            navigate("/");
          } else {
            navigate("/new-user");
          }          
        } else {
          setError(true);
          setMessage(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setMessage("Something went wrong. Please try again later.");
      });
  };

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center" id="login__container"
    >
      <p className="h3 text-center fw-bold">Sign In</p>
      <p className="small text-center">Sign in with your email and password.</p>
      {/* Start: Alert for errors */}
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error: </strong> {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeAlert}
          ></button>
        </div>
      )}
      {/* End: Alert for errors */}
      <form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
