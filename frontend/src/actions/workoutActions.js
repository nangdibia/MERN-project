import {
  CREATE_WORKOUT,
  FETCH_ALL_WORKOUTS,
  DELETE_WORKOUT,
  // UPDATE_WORKOUT,
} from "../../src/types";

import axios from "axios";

// fetching workouts from the database

export const fetchAllWorkouts = () => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:5000/api/workouts/`)
      .then((res) => {
        return dispatch({
          type: FETCH_ALL_WORKOUTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        return err.message;
      });
  };
};

//create new workout

export const createWorkout = (title, load, reps, user) => {
  console.log(title, load, reps);
  return (dispatch) => {
    if (user) {
      console.log(user);
      return axios
        .post(`http://localhost:5000/api/workouts/`, {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.token}`,
          },
          data: { title, load, reps },
        })
        .then((res) => {
          console.log(res.data);
          return dispatch({
            type: CREATE_WORKOUT,
            payload: res.data,
          });
        })
        .catch((err) => {
          return err.message;
        });
    }
  };
};

//get single workout

export const deleteWorkout = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5000/api/workouts/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        data: { id },
      })
      .then((res) => {
        console.log(res.data);
        return dispatch({
          type: DELETE_WORKOUT,
          payload: res.data,
        });
      })
      .catch((err) => {
        return console.log(err.message);
      });
  };
};
