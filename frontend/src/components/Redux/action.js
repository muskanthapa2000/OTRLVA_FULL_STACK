import axios from "axios";
import { POST_NEW_USER, GET_CURRENT_USER,LOG_OUT_USER } from "./actionTypes";

const postUserAction = (payload) => {
    return {
      type: POST_NEW_USER,
      payload,
    };
  };
  const loginUserAction = (payload) => {
    return {
      type: GET_CURRENT_USER,
      payload,
    };
  };
  const logOutUserAction = () => {
    return {
      type: LOG_OUT_USER,
    };
  };
  
  // Account page dispatch functions
  export const postNewUser = (newUser) => (dispatch) => {
    dispatch(postUserAction(newUser));
  };
  
  export const getCurrentUser = (currUser) => (dispatch) => {
    dispatch(loginUserAction(currUser));
  };
  
  export const logOutUser = (dispatch) => {
    dispatch(logOutUserAction());
  };