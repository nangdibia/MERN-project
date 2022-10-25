import { combineReducers } from "redux";
import workoutReducer from "./workoutReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  workoutReducer,
  userReducer,
});

export default rootReducer;
