import React from "react";

function NumberInput({ styleClass, title, value, setValue }) {
  return (
    <div className={`col-sm-12 col-md-12 ${styleClass} my-2`}>
      <label htmlFor="age" className="form-label">
        {title}
      </label>
      <input
        type="number"
        min={0}
        className="form-control"
        id="age"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default NumberInput;
