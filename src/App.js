import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/User/SignUp';
import LogIn from './components/User/LogIn';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
