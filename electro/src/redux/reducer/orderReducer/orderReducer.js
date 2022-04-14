import { ORDER } from "../../types/type";

const initValues = {
  yourOrder: null,
  carts: [],
};

const orderReducer = (state = initValues, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        yourOrder: action.payload.user,
        carts: action.payload.carts,
      };
    default:
      return state;
  }
};

export default orderReducer;
