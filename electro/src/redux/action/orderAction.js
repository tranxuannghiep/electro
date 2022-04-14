import { ORDER } from "../types/type";

export const orderProduct = (payload) => {
  return {
    type: ORDER,
    payload,
  };
};
