import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/pics/logo.jpg";
import { logoutUser } from "../actions/userActions";

import { connect } from "react-redux";

const Navbar = (props) => {
  const [user, setUser] = useState([]);
  let loginuser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!loginuser) {
      return logoutUser();
    } else if (user) {
      setUser({
        user: loginuser,
      });
    }
  }, []);

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
          {loginuser == null ? (
            <div className="navsign">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          ) : null}
          {loginuser !== null ? (
            <div className="navsign">
              <span className="user-email">{loginuser.email}</span>
              <b onClick={props.logoutUser} className="logout">
                Logout
              </b>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: [state.userReducer.users],
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
