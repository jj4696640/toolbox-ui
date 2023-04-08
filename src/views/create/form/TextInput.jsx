import React from "react";

function TextInput({ title,type, value, setValue, styleClass = "col-lg-4" }) {
  return (
    <div className={`col-sm-12 col-md-12 my-2 ${styleClass}`} >
      <label htmlFor="Name" className="form-label">
        {title}
      </label>
      <input
        type={type}
        className="form-control"
        id="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
