import axios from "axios";
import { CURRENT_USER } from "./types";

export const stripePayment = token => async dispatch => {
  const payment = await axios.post("/api/stripe", token);
  console.log(payment.data);
  dispatch({
    type: CURRENT_USER,
    payload: payment.data
  });
};
