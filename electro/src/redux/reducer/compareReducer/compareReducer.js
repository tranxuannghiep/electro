import {
  ADD_COMPARE,
  DELETE_COMPARE,
  DELETE_COMPARE_ALL,
  GET_ALL_COMPARE,
} from "../../types/type";

const initValues = {
  email: "",
  compare: [],
};
let compareLocal, idxCompare, idx;
const compareReducer = (state = initValues, action) => {
  switch (action.type) {
    case GET_ALL_COMPARE:
      return {
        ...state,
        email: action.payload.email,
        compare: action.payload.data,
      };
    case ADD_COMPARE:
      if (state.compare.length === 3) return state;
      else {
        idx = state.compare.findIndex((val) => val._id === action.payload._id);
        compareLocal = JSON.parse(localStorage.getItem("compare")) || [];
        idxCompare = compareLocal.findIndex((val) => val.email === state.email);

        if (idxCompare !== -1) {
          if (idx === -1) {
            localStorage.setItem(
              "compare",
              JSON.stringify([
                ...compareLocal.slice(0, idxCompare),
                {
                  email: state.email,
                  data: [...state.compare, { ...action.payload }],
                },
                ...compareLocal.slice(idxCompare + 1),
              ])
            );
          }
        } else {
          if (idx === -1) {
            localStorage.setItem(
              "compare",
              JSON.stringify([
                ...compareLocal,
                {
                  email: state.email,
                  data: [...state.compare, { ...action.payload }],
                },
              ])
            );
          }
        }
        if (idx === -1) {
          return {
            ...state,
            compare: [...state.compare, { ...action.payload }],
          };
        } else {
          return state;
        }
      }

    case DELETE_COMPARE:
      idx = state.compare.findIndex((val) => val._id === action.payload);

      compareLocal = JSON.parse(localStorage.getItem("compare")) || [];
      idxCompare = compareLocal.findIndex((val) => val.email === state.email);
      if (idxCompare !== -1) {
        localStorage.setItem(
          "compare",
          JSON.stringify([
            ...compareLocal.slice(0, idxCompare),
            {
              email: state.email,
              data: [
                ...state.compare.slice(0, idx),
                ...state.compare.slice(idx + 1),
              ],
            },
            ...compareLocal.slice(idxCompare + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "compare",
          JSON.stringify([
            ...compareLocal,
            {
              email: state.email,
              data: [
                ...state.compare.slice(0, idx),
                ...state.compare.slice(idx + 1),
              ],
            },
          ])
        );
      }

      return {
        ...state,
        compare: [
          ...state.compare.slice(0, idx),
          ...state.compare.slice(idx + 1),
        ],
      };
    case DELETE_COMPARE_ALL:
      idx = state.compare.findIndex((val) => val._id === action.payload);

      compareLocal = JSON.parse(localStorage.getItem("compare")) || [];
      idxCompare = compareLocal.findIndex((val) => val.email === state.email);
      if (idxCompare !== -1) {
        localStorage.setItem(
          "compare",
          JSON.stringify([
            ...compareLocal.slice(0, idxCompare),
            {
              email: state.email,
              data: [],
            },
            ...compareLocal.slice(idxCompare + 1),
          ])
        );
      } else {
        localStorage.setItem(
          "compare",
          JSON.stringify([
            ...compareLocal,
            {
              email: state.email,
              data: [],
            },
          ])
        );
      }
      return {
        ...state,
        compare: [],
      };
    default:
      return state;
  }
};
export default compareReducer;
