import { CURRENT_USER } from "./types";

export const currentUser = data => dispatch => {
  dispatch({
    type: CURRENT_USER,
    payload: data
  });
};
