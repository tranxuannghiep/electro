import { CLEAR_ERROR, SET_ERROR } from "../types/type";

const initValues = {
  error: "",
};

const errorReducer = (state = initValues, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default errorReducer;
