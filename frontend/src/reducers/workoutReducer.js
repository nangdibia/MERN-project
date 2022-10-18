import {
  CREATE_WORKOUT,
  FETCH_ALL_WORKOUTS,
  // FETCH_SINGLE_WORKOUT,
  // FETCH_SINGLE_WORKOUT,
  DELETE_WORKOUT,
} from "../../src/types";

const initialState = {
  workouts: [],
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_WORKOUTS:
      let newWorkouts = {
        ...state,
        workouts: [...action.payload],
      };
      return newWorkouts;

    case CREATE_WORKOUT:
      let newWorkout = {
        ...state,
        workouts: [action.payload, ...state.workouts],
      };
      return newWorkout;

    case DELETE_WORKOUT:
      let newworkouts = state.workouts.filter((workout) => {
        return workout._id !== action.payload._id;
      });
      return {
        ...state,
        workouts: newworkouts,
      };
    default:
      return state;
  }
};

export default workoutReducer;
