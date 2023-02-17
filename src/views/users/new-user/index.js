import React from "react";
import { Link } from "react-router-dom";

function NewUser() {
  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{ width: "35%" }}
    >
      <p className="h3 text-center fw-bold">User Pending Approval</p>
      <p className="">
        Thank you for signing up to our application! We appreciate your interest
        in Toolbox.
      </p>
      <p className="">
        Please note that your account is currently undergoing review and will be
        approved within the next 24 to 48 hours. Once your account has been
        approved, you will receive an email notification with further
        instructions.
      </p>
      <p className="">
        If you have any questions or would like to follow up on the status of
        your account, please feel free to contact us using the following
        methods:
      </p>
      <ul>
        <li>Phone: 0700123123</li>
        <li>Email: support@toolbox.co.ug</li>
        <li>
          Website: <Link to="https:toolbox.co.ug" className="text-decoration-none">Toolbox</Link>
        </li>
      </ul>
      <p>
        Thank you again for signing up on Toolbox, and we look forward to seeing
        you on the Toolbox soon!
      </p>
      <p>Useful Links</p>
      <ul>
        <li>
          <Link to="/login" className="text-decoration-none">Sign In</Link>
        </li>
        <li>
          <Link to="/register" className="text-decoration-none">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default NewUser;
