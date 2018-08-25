import axios from "axios";
import { CURRENT_USER } from "./types";

export const logoutUser = () => async dispatch => {
  const user = await axios.get("/auth/logout");
  dispatch({
    type: CURRENT_USER,
    payload: user.data
  });
  window.location.href = "/";
};
