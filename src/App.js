import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>    
  );
}

export default App;
