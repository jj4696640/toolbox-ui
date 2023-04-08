import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className="border-bottom mb-5">
        <p className="h2">Suspect Profile</p>
        <p>
            {" "}
        </p>
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
    </div>
  )
}

export default Header