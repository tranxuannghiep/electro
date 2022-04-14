import { ADD_REVIEW } from "../../types/type";

const initValues = {
  review: [],
};

const reviewReducer = (state = initValues, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        review: [...state.review, action.payload],
      };
    default:
      return state;
  }
};
export default reviewReducer;
