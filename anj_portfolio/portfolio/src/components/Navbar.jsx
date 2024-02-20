import React from "react";
import './navbar.css';
const Navbar=()=>{
return (
    <>
    <div className="navbarmain">

    
    <div className="card">
      <div className="front">
        <span className="text">Home</span>
      </div>
      <div className="back">
        <span className="text">Home</span>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <span className="text">Downloads</span>
      </div>
      <div className="back">
        <span className="text">Downloads</span>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <span className="text">Tuts</span>
      </div>
      <div className="back">
        <span className="text">Tuts</span>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <span className="text">Blog</span>
      </div>
      <div className="back">
        <span className="text">Blog</span>
      </div>
    </div>
    <div className="card">
      <div className="front">
        <span className="text">About</span>
      </div>
      <div className="back">
        <span className="text">About</span>
      </div>
    </div>
    </div>
  </>
  
)
}
export default Navbar;