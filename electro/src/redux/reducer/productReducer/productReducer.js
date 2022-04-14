import { GET_ALL_PRODUCT } from "../../types/type";

const initValues = {
  products: [],
};

const productReducer = (state = initValues, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
