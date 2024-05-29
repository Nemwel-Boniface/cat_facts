import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, logOutFailure } from '../redux/user/logInSlice';

const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = useSelector((state) => state.login.user?.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.login.error);

  const handleLogOut = async () => {
    try {
      await fetch('https://rails-fetch-be.onrender.com/logout', {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(logout());
      navigate('/');
    } catch (error) {
      dispatch(logOutFailure(error));
    }
  };

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
                    <button type="button" className="nav-link" onClick={handleLogOut}>Log Out</button>
                  </li>
                </ul>
              )
              : (
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
            {error && (
            <p className="red">
              Error:
              {' '}
              {error.message || JSON.stringify(error)}
            </p>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
