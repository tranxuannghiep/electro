import { ADD_WISHLIST, DELETE_WISHLIST, GET_ALL_WISHLIST } from "../types/type";

export const addWishlist = (payload) => {
  return {
    type: ADD_WISHLIST,
    payload: payload,
  };
};
export const deleteWishlist = (id) => {
  return {
    type: DELETE_WISHLIST,
    payload: id,
  };
};

export const getAllWishlist = (email) => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const idx = wishlist.findIndex((val) => val.email === email);
  if (idx !== -1) {
    return {
      type: GET_ALL_WISHLIST,
      payload: wishlist[idx],
    };
  } else {
    return {
      type: GET_ALL_WISHLIST,
      payload: {
        email,
        data: [],
      },
    };
  }
};
