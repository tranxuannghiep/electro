import { GET_ALL_CATEGORY } from "../../types/type";

const initValues = {
  categories: [],
};

const categoryReducer = (state = initValues, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
