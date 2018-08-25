import { CURRENT_USER } from "./actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload ? true : false,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducers;
