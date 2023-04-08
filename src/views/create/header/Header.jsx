import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="border-bottom mb-5 d-flex justify-content-between align-items-end">
      <div>
        <p className="h2">New Suspect Profile</p>
        <p>
          Please fill in the details below to create a new suspect profile. All
          required fields are marked with an asterisk{" "}
          <span className="text-danger fw-bold">*</span>. Use the{" "}
          <button className="btn btn-secondary fw-bold btn-sm" disabled>
            + Add
          </button>{" "}
          button to add more than one entry for a field. For example, if you
          want to add more than one phone number, click the{" "}
          <button className="btn btn-secondary fw-bold btn-sm" disabled>
            + Add
          </button>{" "}
          button next to the phone number field.
        </p>
        <p>
          Use the{" "}
          <button className="btn btn-primary btn-sm fw-bold" disabled>
            Next
          </button>{" "}
          or{" "}
          <button className="btn btn-primary btn-sm fw-bold" disabled>
            Previous
          </button>{" "}
          buttons to navigate between the different sections of the form. Use
          the{" "}
          <button className="btn btn-primary btn-sm fw-bold" disabled>
            Save
          </button>{" "}
          button to save the form and return to the dashboard. Use the{" "}
          <button className="btn btn-primary btn-sm fw-bold" disabled>
            Cancel
          </button>{" "}
          button to discard the form and return to the dashboard.
        </p>
      </div>
    </div>
  );
}

export default Header;
