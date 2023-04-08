import React from "react";

function SelectInput({ title, value, setValue, items }) {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4 my-2">
      <label htmlFor="height" className="form-label">
        {title}
      </label>
      <select
        className="form-select"
        aria-label=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option defaultValue>{title}</option>
        {items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
