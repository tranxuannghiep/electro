import { FILTER_PRODUCT } from "../../types/type";

const initValues = {
  search: "",
  price_min: 0,
  price_max: 5000,
  categoryId: "",
};

const filterReducer = (state = initValues, action) => {
  switch (action.type) {
    case FILTER_PRODUCT:
      return {
        ...initValues,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
