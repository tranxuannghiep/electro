import { ADD_REVIEW } from "../types/type";

export const addReview = (payload) => {
  return {
    type: ADD_REVIEW,
    payload,
  };
};
