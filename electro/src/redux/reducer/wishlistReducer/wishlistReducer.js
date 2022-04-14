import {
  ADD_WISHLIST,
  DELETE_WISHLIST,
  GET_ALL_WISHLIST,
} from "../../types/type";

const initValues = {
  email: "",
  wishlist: [],
};
let wishlistLocal, idxWishlist, idx;
const wishlistReducer = (state = initValues, action) => {
  switch (action.type) {
    case GET_ALL_WISHLIST:
      return {
        ...state,
        email: action.payload.email,
        wishlist: action.payload.data,
      };
    case ADD_WISHLIST:
      idx = state.wishlist.findIndex((val) => val._id === action.payload._id);
      wishlistLocal = JSON.parse(localStorage.getItem("wishlist")) || [];
      idxWishlist = wishlistLocal.findIndex((val) => val.email === state.email);

      if (idxWishlist !== -1) {
        if (idx === -1) {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([
              ...wishlistLocal.slice(0, idxWishlist),
              {
                email: state.email,
                data: [...state.wishlist, { ...action.payload }],
              },
              ...wishlistLocal.slice(idxWishlist + 1),
            ])
          );
        }
      } else {
        if (idx === -1) {
          localStorage.setItem(
            "wishlist",
            JSON.stringify([
              ...wishlistLocal,
              {
                email: state.email,
                data: [...state.wishlist, { ...action.payload }],
              },
            ])
          );
        }
      }
      if (idx === -1) {
        return {
          ...state,
          wishlist: [...state.wishlist, { ...action.payload }],
        };
      } else {
        return state;
      }
    case DELETE_WISHLIST:
      idx = state.wishlist.findIndex((val) => val._id === action.payload);

      wishlistLocal = JSON.parse(localStorage.getItem("wishlist")) || [];
      idxWishlist = wishlistLocal.findIndex((val) => val.email === state.email);
      if (idxWishlist !== -1) {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([
            ...wishlistLocal.slice(0, idxWishlist),
            {
              email: state.email,
              data: [
                ...state.wishlist.slice(0, idx),
                ...state.wishlist.slice(idx + 1),
              ],
            },
            ...wishlistLocal.slice(idxWishlist + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([
            ...wishlistLocal,
            {
              email: state.email,
              data: [
                ...state.wishlist.slice(0, idx),
                ...state.wishlist.slice(idx + 1),
              ],
            },
          ])
        );
      }

      return {
        ...state,
        wishlist: [
          ...state.wishlist.slice(0, idx),
          ...state.wishlist.slice(idx + 1),
        ],
      };
    default:
      return state;
  }
};
export default wishlistReducer;
