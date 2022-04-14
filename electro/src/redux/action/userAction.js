import axios from "axios";
import setAuthToken from "../../healpers/axiosHeader";
import {
  CLEAR_ERROR,
  SET_USER,
  LOGIN,
  REGISTER,
  SET_AUTHING,
  SET_ERROR,
  SET_LOADING_LOGIN,
  SET_LOADING_REGISTER,
} from "../types/type";
export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch(setLoadingLogin(true));
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/login",
      data
    );
    const token = res.data.token;
    localStorage.setItem("token", token);
    setAuthToken(token);
    navigate("/");
    dispatch({
      type: LOGIN,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch(setLoadingLogin(true));
    dispatch({
      type: SET_ERROR,
      payload: error.response.data.message,
    });
  } finally {
    dispatch({
      type: CLEAR_ERROR,
    });
    dispatch(setLoadingLogin(false));
  }
};

export const registerUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch(setLoadingRegister(true));
    const res = await axios.post(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/register",
      data
    );
    navigate("/");
    dispatch({
      type: REGISTER,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch(setLoadingRegister(true));
    console.log(error.response.data.message);
    dispatch({
      type: SET_ERROR,
      payload: error.response.data.message,
    });
  } finally {
    dispatch({
      type: CLEAR_ERROR,
    });
    dispatch(setLoadingRegister(false));
  }
};

export const setCurrentUser = (token) => async (dispatch) => {
  try {
    dispatch({
      type: SET_AUTHING,
      payload: true,
    });
    setAuthToken(token);
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/auth/me"
    );
    dispatch({
      type: SET_USER,
      payload: res.data.user,
    });
  } catch (error) {
    setAuthToken(false);
    localStorage.removeItem("token");
  } finally {
    dispatch({
      type: SET_AUTHING,
      payload: false,
    });
  }
};

export const setLoadingLogin = (isLoading) => {
  return {
    type: SET_LOADING_LOGIN,
    payload: isLoading,
  };
};

export const setLoadingRegister = (isLoading) => {
  return {
    type: SET_LOADING_REGISTER,
    payload: isLoading,
  };
};
