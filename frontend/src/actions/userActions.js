import { LOGIN, SIGNUP, LOGOUT } from "../types";
import axios from "axios";


export const signupUser = (email, password) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:5000/api/user/signup`, {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        data: { email, password },
      })
      .then((res) => {
        if (res.data.error) {
          alert("ERROR");
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          return dispatch({
            type: SIGNUP,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        return err.message;
      });
  };
};


// Login action
export const loginUser = (email, password, setState) => {
  return (dispatch) => {
    return axios
      .post(`http://localhost:5000/api/user/login`, {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        data: { email, password },
      })
      .then((res) => {
        console.log();
        if (res.data.error) {
          alert("No such user");
          return setState({
            error: res.data.error.message,
          });
        } else {
          localStorage.setItem("user", JSON.stringify(res.data));
          return dispatch({
            type: LOGIN,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        return err.message;
      });
  };
};


// Logout action
export const logoutUser = () => {
  localStorage.removeItem("user");
  return (dispatch) => {
    return dispatch({
      type: LOGOUT,
    });
  };
};
