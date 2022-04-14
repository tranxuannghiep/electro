import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import BrandsSlider from "./components/BrandsSlider/BrandsSlider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MyAccount from "./components/MyAccount/MyAccount";
import Navigation from "./components/Navigation/Navigation";
import RecommendProduct from "./components/RecommendProduct/RecommendProduct";
import SignupNewsLetter from "./components/SignupNewsLetter/SignupNewsLetter";
import Theme from "./components/Theme/Theme";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import PrivateRoute from "./private/PrivateRoute";
import { setCurrentUser } from "./redux/action/userAction";
import store from "./redux/store";
import Shop from "./components/Shop/Shop";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
import { getAllProduct } from "./redux/action/productAction";
import { getAllCart } from "./redux/action/cartAction";
import CartComponent from "./components/CartComponent/CartComponent";
import Checkout from "./components/Checkout/Checkout";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import WishList from "./components/Wishlist/WishList";
import { getAllWishlist } from "./redux/action/wishlistAction";
import { getAllCompare } from "./redux/action/compareAction";
import CompareComponent from "./components/CompareComponent/CompareComponent";
import Detail from "./components/Detail/Detail";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(setCurrentUser(token));
}
function App() {
  const error = useSelector((state) => state.errorReducer.error);
  const user = useSelector((state) => state.userReducer.currentUser);
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    store.dispatch(getAllProduct());
  }, []);
  useEffect(() => {
    if (user) {
      store.dispatch(getAllCart(user.email));
      store.dispatch(getAllWishlist(user.email));
      store.dispatch(getAllCompare(user.email));
    }
  }, [user]);

  return (
    <div id="App">
      <Header />
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="my-account"
          element={
            <>
              <Navigation />
              <MyAccount />
            </>
          }
        />
        <Route
          path="shop"
          element={
            <>
              <Navigation />
              <Shop />
            </>
          }
        />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Navigation />
              <CartComponent />
            </PrivateRoute>
          }
        />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Navigation />
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="order-success"
          element={
            <PrivateRoute>
              <Navigation />
              <OrderSuccess />
            </PrivateRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            <PrivateRoute>
              <Navigation />
              <WishList />
            </PrivateRoute>
          }
        />
        <Route
          path="compare"
          element={
            <PrivateRoute>
              <Navigation />
              <CompareComponent />
            </PrivateRoute>
          }
        />
        <Route
          path="product/:id"
          element={
            <PrivateRoute>
              <Navigation />
              <Detail />
            </PrivateRoute>
          }
        />
      </Routes>
      <BrandsSlider />
      <RecommendProduct />
      <SignupNewsLetter />
      <Footer />
      <BackTop>
        <UpOutlined />
      </BackTop>
      <Theme />

      <ToastContainer
        style={{ marginTop: 60 }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
