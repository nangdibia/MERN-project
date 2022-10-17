import {
  CREATE_WORKOUT,
  FETCH_ALL_WORKOUTS,
  //   FETCH_SINGLE_WORKOUT,
  //   UPDATE_WORKOUT,
} from "../../src/types";

const initialState = {
  workouts: [],
};

const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_WORKOUTS:
      let newWorkouts = {
        ...state,
        workouts: [...state.workouts, ...action.payload],
      };
      return newWorkouts;


    case CREATE_WORKOUT:
      let newWorkout = {
        ...state,
        workouts: [...state.workouts, ...action.payload],
      };
      console.log(action.payload);
      return newWorkout;


    default:
      return state;
  }
};

export default workoutReducer;
