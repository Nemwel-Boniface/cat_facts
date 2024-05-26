import React from 'react';
import { useSelector } from 'react-redux';

const WelcomePage = () => {
  const username = useSelector((state) => state.login.user?.username);
  return (
    <div className='content-wrapper d-flex flex-column min-vh-100'>
      <h1>Hello {username}!</h1>
    </div>
  )
};

export default WelcomePage
