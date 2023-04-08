import React from "react";

function ImageInput({ front, handleImageUpload, title }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-2">
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundImage: front,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p className="h6 fw-bold my-2">{title}</p>
      <div>
        <input
          className="form-control form-control-sm"
          id="formFileFront"
          type="file"
          onChange={handleImageUpload}
          required
        />
      </div>
    </div>
  );
}

export default ImageInput;
