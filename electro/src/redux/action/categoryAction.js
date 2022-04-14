import axios from "axios";
import { CLEAR_ERROR, GET_ALL_CATEGORY, SET_ERROR } from "../types/type";

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://hidden-fjord-17428.herokuapp.com/api/v1/category"
    );
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error.response.data.message,
    });
  } finally {
    dispatch({
      type: CLEAR_ERROR,
    });
  }
};
