import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../../../axios";
import  IMAGE_BASE_URL  from "../../../constants";

function Suspects() {
  // suspects data
  const [suspects, setSuspects] = React.useState([]);


  // fetch suspects data
  const fetchSuspects = useCallback(async () => {
    instance.get("/suspects").then((res) => {
      console.log("🚀 ~ file: index.js:12 ~ instance.get ~ res", res)
      setSuspects(res.data.suspects);
    });
  }, []);

  useEffect(() => {
    fetchSuspects();
  }, [fetchSuspects]);

  return (
    <>
      <div className="border-bottom mb-5">
        <p className="h2">Profiles</p>
        <p>Profiles submitted.</p>
      </div>
      <div className="d-flex justify-content-end align-items-center mb-2">
        <form>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="dropdown mx-2">
          <button
            className="btn btn-sm dropdown-toggle"
            type="button"
            id="filterOptions"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className="bi bi-three-dots-vertical"
              style={{ fontSize: "25px" }}
            ></i>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="filterOptions"
            style={{ minWidth: "20px !important" }}
          >
            <li>
              <Link className="dropdown-item" to="#">
                Filter
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Sort
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        {
          suspects.map((suspect) => (
            <div className="col-lg-4 col-md-4 mb-5" key={suspect.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={suspect.images.length > 0 ? `${IMAGE_BASE_URL}${suspect.images[1].image_path}` : "https://via.placeholder.com/150"}
              className="card-img-top"
              alt="..."
              style={{ height: "300px"}}
            />
            <div className="card-body">
              <h5 className="card-title">{suspect.name} | {suspect.case_ref}</h5>
              <p className="card-text">
                {suspect.offence}
              </p>
              <Link to={`/suspects/${suspect.id}`} className="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
          ))
        }
      </div>
    </>
  );
}

export default Suspects;
