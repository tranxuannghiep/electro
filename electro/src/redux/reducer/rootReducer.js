import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";
import errorReducer from "../errorReducer/errorRducer";
import categoryReducer from "./categoryReducer/categoryReducer";
import productReducer from "./productReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";
import orderReducer from "./orderReducer/orderReducer";
import filterReducer from "./filterReducer/filterReducer";
import loadingReducer from "./loadingReducer/loadingReducer";
import wishlistReducer from "./wishlistReducer/wishlistReducer";
import compareReducer from "./compareReducer/compareReducer";
import reviewReducer from "./reviewReducer/reviewReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  categoryReducer,
  productReducer,
  cartReducer,
  orderReducer,
  filterReducer,
  loadingReducer,
  wishlistReducer,
  compareReducer,
  reviewReducer,
});

export default rootReducer;
