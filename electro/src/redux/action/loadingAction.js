import { SET_LOADING } from "../types/type";

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
