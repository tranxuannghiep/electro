import { SET_LOADING } from "../../types/type";

const initValues = {
  isLoading: false,
};

const loadingReducer = (state = initValues, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default loadingReducer;
