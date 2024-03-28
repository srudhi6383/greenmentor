import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionTypes";
import axios from "axios";

export const signup = (details) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SIGNUP_REQUEST });
      await axios.post(`https://greenmentor-l03o.onrender.com/auth/register`, details);
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE });
    }
  };
};
