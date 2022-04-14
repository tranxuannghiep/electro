import { FILTER_PRODUCT } from "../types/type";

export const filterProduct = (payload) => {
  return {
    type: FILTER_PRODUCT,
    payload,
  };
};
