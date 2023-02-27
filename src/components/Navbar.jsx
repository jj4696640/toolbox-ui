import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../axios';

function Navbar() {
    const [data, setData] = useState({});
    const navigate = useNavigate()

    // Logout
    const logout = () => {
        instance.post('/logout').then((res) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
      setData(JSON.parse(localStorage.getItem('user')));
    },[])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Toolbox</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 d-sm-block d-md-none">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/suspects">Suspects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-new">Add New Suspect</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create-new">Users</Link>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-none d-md-block d-lg-block">
        <div
          className="dropdown me-4 d-flex justify-content-center align-items-end"
        >
          <span
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {`${data.first_name} ${data.second_name}`}
          </span>
          <ul className="dropdown-menu">
            {/* <li><Link className="dropdown-item" to="#">Dashboard</Link></li> */}
            {/* <li><Link className="dropdown-item" to="#">Profile</Link></li> */}
            <li><Link className="dropdown-item" to="#" onClick={logout}>Sign Out</Link></li>
          </ul>
        </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar