import {
  LOGIN,
  REGISTER,
  SET_AUTHING,
  SET_LOADING_LOGIN,
  SET_LOADING_REGISTER,
  SET_USER,
} from "../../types/type";

const initState = {
  currentUser: null,
  loadingLogin: false,
  loadingRegister: false,
  authing: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
      };
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_LOADING_LOGIN:
      return {
        ...state,
        loadingLogin: action.payload,
      };
    case SET_LOADING_REGISTER:
      return {
        ...state,
        loadingRegister: action.payload,
      };
    case SET_AUTHING:
      return {
        ...state,
        authing: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
