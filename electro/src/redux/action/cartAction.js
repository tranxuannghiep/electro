import {
  ADD_CART,
  CLEAR_CART,
  DELETE_CART,
  GET_ALL_CART,
  UPDATE_CART,
} from "../types/type";

export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload: payload,
  };
};
export const deleteCart = (id) => {
  return {
    type: DELETE_CART,
    payload: id,
  };
};

export const updateCart = (payload) => {
  return {
    type: UPDATE_CART,
    payload: payload,
  };
};

export const getAllCart = (email) => {
  const carts = JSON.parse(localStorage.getItem("carts")) || [];
  const idx = carts.findIndex((val) => val.email === email);
  if (idx !== -1) {
    return {
      type: GET_ALL_CART,
      payload: carts[idx],
    };
  } else {
    return {
      type: GET_ALL_CART,
      payload: {
        email,
        data: [],
      },
    };
  }
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
