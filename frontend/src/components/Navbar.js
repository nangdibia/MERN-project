import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/pics/logo.jpg";

const Navbar = () => {
  return (
    <>
      <div className=" ">
        <div className="header container-fluid bg-dark ">
          <NavLink to="/" className="icon ">
            WORKOUTS
          </NavLink>
          <span>
            <img
              src={logo}
              alt=""
              style={{ width: "35px", borderRadius: "3px" }}
            />
          </span>
        </div>
        <div className="nav">
          <div className="nav-inner">
            
              <NavLink to="/">Home</NavLink>
          
            <li>
              <NavLink to="/add">Add Workout</NavLink>
            </li>
          </div>
          <div className="navsign">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};


export default Navbar;
