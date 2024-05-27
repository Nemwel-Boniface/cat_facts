import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  logInRequest, logInSuccess, logInFailure,
} from '../../redux/user/logInSlice';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);
  const success = useSelector((state) => state.login.success);
  const error = useSelector((state) => state.login.error);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInRequest());

    try {
      const response = await fetch('https://rails-fetch-be.onrender.com/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const responseData = await response.json();
      const userInfo = responseData.status.data.user;
      const authToken = userInfo.token;
      localStorage.setItem('authToken', authToken);
      dispatch(logInSuccess(userInfo));
      navigate('/welcome');
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
  };

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          className="form-control"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form-control"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <button disabled={loading} type="submit" className="btn btn-primary btn-block py-2">Sign In</button>

      {loading && <p className="yellow">Logging in...</p>}
      {error && (
      <p className="red">
        Error:
        {error}
      </p>
      )}
      {success && <p className="green">Login successful!</p>}
    </form>
  );

  return (
    <main className="container-fluid px-0 my-5">
      <section className="row justify-content-center mx-0">
        <div className="col-lg-12 px-0">
          <h2 className="text-center mb-4">Welcome back to Cat Fact Finder</h2>
          <div className="card mx-auto" style={{ maxWidth: '900px' }}>
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Pawceed to Cat Facts</h5>
                  { renderLoginForm() }
                  <p className="mt-3">
                    Do not have an account? <Link to="/signup">Sign up here</Link>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW43NDZqNnM4bmFxdzEzNzNnazA3dTA4bjhqZGVmMmJobGg4bGlrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YsfPFdNPHv7PfdvWv7/giphy.gif" className="card-img" alt="Signin" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LogIn;
