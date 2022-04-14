import { Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import "./Carts.scss";
const Carts = (props) => {
  const { refs } = props;
  const carts = useSelector((state) => state.cartReducer.carts);
  const navigate = useNavigate();
  const handleViewCart = () => {
    props.setShowCart(false);
    navigate("/cart");
  };
  const handleCheckout = () => {
    props.setShowCart(false);
    navigate("/checkout");
  };
  return (
    <div id="Carts" ref={refs}>
      {carts.length ? (
        <>
          <div className="carts-list">
            {carts.map((cart) => (
              <CartItem key={cart._id} cart={cart} />
            ))}
          </div>
          <div className="carts-button">
            <Button onClick={handleViewCart} className="view-cart">
              View cart
            </Button>
            <Button onClick={handleCheckout} className="checkout">
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <img
          src="https://shantahl.net/assets/images/icons/no_products_found.png"
          alt=""
        />
      )}
    </div>
  );
};
export default Carts;
