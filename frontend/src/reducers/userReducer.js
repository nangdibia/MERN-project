import { SIGNUP, LOGIN, LOGOUT } from "../../src/types";

const initialUsers = {
  users: [],
};

const userReducer = (state = initialUsers, action) => {
  // console.log(state.users);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        users: [state.users, ...action.payload],
      };

    case LOGIN:
      return {
        users: action.payload,
      };
    case LOGOUT:
      return {
        users: null,
      };

    default:
      return state;
  }
};

export default userReducer;
