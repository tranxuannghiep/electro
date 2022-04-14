import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../baseUrl/baseUrl";
import { deleteCart } from "../../../redux/action/cartAction";
import "./CartItem.scss";
const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div id="CartItem">
      <img src={`${baseUrl}/${cart.image}`} alt="" />
      <div className="cart-item-body">
        <p className="cart-item-name">{cart.name}</p>
        <p className="cart-item-price">
          <span>{cart.quantity}</span> x <span>${cart.promotion_price}</span>
        </p>
      </div>
      <div
        className="close-cart"
        onClick={() => dispatch(deleteCart(cart._id))}
      >
        <CloseOutlined />
      </div>
    </div>
  );
};

export default CartItem;
