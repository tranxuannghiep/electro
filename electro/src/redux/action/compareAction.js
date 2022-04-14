import {
  ADD_COMPARE,
  DELETE_COMPARE,
  DELETE_COMPARE_ALL,
  GET_ALL_COMPARE,
} from "../types/type";

export const addCompare = (payload) => {
  return {
    type: ADD_COMPARE,
    payload: payload,
  };
};
export const deleteCompare = (id) => {
  return {
    type: DELETE_COMPARE,
    payload: id,
  };
};
export const deleteCompareAll = () => {
  return {
    type: DELETE_COMPARE_ALL,
  };
};

export const getAllCompare = (email) => {
  const compare = JSON.parse(localStorage.getItem("compare")) || [];
  const idx = compare.findIndex((val) => val.email === email);
  if (idx !== -1) {
    return {
      type: GET_ALL_COMPARE,
      payload: compare[idx],
    };
  } else {
    return {
      type: GET_ALL_COMPARE,
      payload: {
        email,
        data: [],
      },
    };
  }
};
