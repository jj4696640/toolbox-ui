import React from "react";

function ShowAlert(props) {
  const closeAlert = () => {
    props.setShowAlert(false);
  };
  return (
    <div
      className={`alert alert-${props.type} alert-dismissible fade show`}
      role="alert"
    >
      {props.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={closeAlert}
      ></button>
    </div>
  );
}

export default ShowAlert;
