import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../axios';

function Navbar() {
    const data = useState(JSON.parse(localStorage.getItem('user')));
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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Toolbox</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register.html">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">Sign In</a>
          </li> */}
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 me-4">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {`${data.first_name} ${data.second_name}`}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {/* <li><a className="dropdown-item" href="#">Account Settings</a></li> */}
              <li><Link className="dropdown-item" to="#" onClick={logout}>Sign Out</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar