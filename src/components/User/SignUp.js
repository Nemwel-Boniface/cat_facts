import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { signUpRequest, signUpSuccess, signUpFailure, setToken } from '../../redux/user/signUpSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.signup.loading);
  const success = useSelector((state) => state.signup.success);
  const error = useSelector((state) => state.signup.error);
  
  const [photo, setPhoto] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = async (imageURL) => {
    dispatch(signUpRequest());
    const upDatedFormData = { ...formData, photo: imageURL };
    try {
      const response = await fetch('http://127.0.0.1:3000/signup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ user: upDatedFormData }),
      });

      if (!response.ok) {
        // Handle non-successful response (HTTP status code other than 200-299)
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      // If the response is successful (HTTP status code 200-299), continue here
      const responseData = await response.json();
      const authToken = responseData.token;
      localStorage.setItem('authToken', authToken);

      // Dispatch the signup success action and set the token in Redux state
      dispatch(signUpSuccess());
      dispatch(setToken(authToken)); // Assuming you have a setToken action
      navigate('/login');
    } catch (error) {
      // Handle errors during the fetch request or error responses from the API
      dispatch(signUpFailure(error.message));
    }
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'cat_facts');
    data.append('cloud_name', 'nemwelb');

    fetch('https://api.cloudinary.com/v1_1/nemwelb/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        handleSubmit(data.url);
      })/* eslint-disable no-console */
      .catch((err) => console.log(err));
  };

  const signUpForm = () => (
    <form onSubmit={uploadImage}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          type="text"
          placeholder="User Name"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          className="form-control"
          type="email"
          placeholder="your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />      
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password confirmation"
          value={formData.con}
          onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUpload">Upload Profile Picture</label>
        <input
          className="form-control"
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block py-2" disabled={loading}>Sign Up</button>
      {loading && <p className="yellow">Signing up...</p>}
        {error && (
          <p className="red">
            Error:
            {error}
          </p>
        )}
        {success && <p className="green">Signup successful!</p>}
    </form>
  );

  return (
    <main className="container-fluid px-0 my-5">
      <section className="row justify-content-center mx-0">
        <div className="col-lg-12 px-0">
          <h2 className="text-center mb-4">Join Cat Fact Finder</h2>
          <div className="card mx-auto" style={{ maxWidth: '900px' }}>
            <div className="row no-gutters">
              <div className="col-md-6">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2wxemx5NTdhYmljNTk4eDBhcmVvY2VzbmRzbWc5dXd5MHRsNmo4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/juSCTzqDAV1Xq/giphy.gif" className="card-img" alt="Signup" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Pawceed to Cat Facts</h5>
                  { signUpForm() }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SignUp