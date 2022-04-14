import {
  ADD_CART,
  CLEAR_CART,
  DELETE_CART,
  GET_ALL_CART,
  UPDATE_CART,
} from "../../types/type";

const initValues = {
  email: "",
  carts: [],
};

let cartsLocal, idxCart, idx;

const cartReducer = (state = initValues, action) => {
  switch (action.type) {
    case GET_ALL_CART:
      return {
        ...state,
        email: action.payload.email,
        carts: action.payload.data,
      };
    case ADD_CART:
      idx = state.carts.findIndex((val) => val._id === action.payload._id);

      cartsLocal = JSON.parse(localStorage.getItem("carts")) || [];

      idxCart = cartsLocal.findIndex((val) => val.email === state.email);

      if (idxCart !== -1) {
        if (idx === -1) {
          localStorage.setItem(
            "carts",
            JSON.stringify([
              ...cartsLocal.slice(0, idxCart),
              {
                email: state.email,
                data: [...state.carts, { ...action.payload }],
              },
              ...cartsLocal.slice(idxCart + 1),
            ])
          );
        } else {
          localStorage.setItem(
            "carts",
            JSON.stringify([
              ...cartsLocal.slice(0, idxCart),
              {
                email: state.email,
                data: [
                  ...state.carts.slice(0, idx),
                  {
                    ...action.payload,
                    quantity:
                      (state.carts[idx].quantity || 0) +
                      action.payload.quantity,
                  },
                  ...state.carts.slice(idx + 1),
                ],
              },
              ...cartsLocal.slice(idxCart + 1),
            ])
          );
        }
      } else {
        if (idx === -1) {
          localStorage.setItem(
            "carts",
            JSON.stringify([
              ...cartsLocal,
              {
                email: state.email,
                data: [...state.carts, { ...action.payload }],
              },
            ])
          );
        } else {
          localStorage.setItem(
            "carts",
            JSON.stringify([
              ...cartsLocal,
              {
                email: state.email,
                data: [
                  ...state.carts.slice(0, idx),
                  {
                    ...action.payload,
                    quantity:
                      (state.carts[idx].quantity || 0) +
                      action.payload.quantity,
                  },
                  ...state.carts.slice(idx + 1),
                ],
              },
            ])
          );
        }
      }
      if (idx === -1) {
        return {
          ...state,
          carts: [...state.carts, { ...action.payload }],
        };
      } else {
        return {
          ...state,
          carts: [
            ...state.carts.slice(0, idx),
            {
              ...action.payload,
              quantity:
                (state.carts[idx].quantity || 0) + action.payload.quantity,
            },
            ...state.carts.slice(idx + 1),
          ],
        };
      }
    case DELETE_CART:
      idx = state.carts.findIndex((val) => val._id === action.payload);

      cartsLocal = JSON.parse(localStorage.getItem("carts")) || [];
      idxCart = cartsLocal.findIndex((val) => val.email === state.email);
      if (idxCart !== -1) {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal.slice(0, idxCart),
            {
              email: state.email,
              data: [
                ...state.carts.slice(0, idx),
                ...state.carts.slice(idx + 1),
              ],
            },
            ...cartsLocal.slice(idxCart + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal,
            {
              email: state.email,
              data: [
                ...state.carts.slice(0, idx),
                ...state.carts.slice(idx + 1),
              ],
            },
          ])
        );
      }

      return {
        ...state,
        carts: [...state.carts.slice(0, idx), ...state.carts.slice(idx + 1)],
      };
    case UPDATE_CART:
      cartsLocal = JSON.parse(localStorage.getItem("carts")) || [];
      idxCart = cartsLocal.findIndex((val) => val.email === state.email);
      if (idxCart !== -1) {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal.slice(0, idxCart),
            {
              email: state.email,
              data: action.payload,
            },
            ...cartsLocal.slice(idxCart + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal,
            { email: state.email, data: action.payload },
          ])
        );
      }
      return {
        ...state,
        carts: action.payload,
      };

    case CLEAR_CART:
      cartsLocal = JSON.parse(localStorage.getItem("carts")) || [];
      idxCart = cartsLocal.findIndex((val) => val.email === state.email);
      if (idxCart !== -1) {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal.slice(0, idxCart),
            {
              email: state.email,
              data: [],
            },
            ...cartsLocal.slice(idxCart + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "carts",
          JSON.stringify([
            ...cartsLocal,
            {
              email: state.email,
              data: [],
            },
          ])
        );
      }
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
