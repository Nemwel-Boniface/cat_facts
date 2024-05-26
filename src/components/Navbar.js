import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <header className="navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Cat Facts</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {
            isUserLoggedIn
              ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/welcome">Welcome</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Log Out</Link>
                </li>
              </ul>
            ):
            (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">SignUp</Link>
                </li>
              </ul>
            )
          }
        </ul>
      </div>
    </nav>
  </header>
  )
};

export default Navbar;
