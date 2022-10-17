import {
  CREATE_WORKOUT,
  FETCH_ALL_WORKOUTS,
  // FETCH_SINGLE_WORKOUT,
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

export const createWorkout = (title, load, reps) => {
  console.log(title, load, reps);
  return (dispatch) => {
    return axios
    .post(`http://localhost:5000/api/workouts/`, {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      data: { title, load, reps },
    })
    .then((res) => {
        console.log('hello');
        console.log(res.data);
        return dispatch({
          type: CREATE_WORKOUT,
          payload: res.data,
        });
      })
      .catch((err) => {
        return err.message;
      });
  };
};
