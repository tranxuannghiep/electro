import {
  CarOutlined,
  EnvironmentOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./TopBar.scss";

const TopBar = () => {
  const navigate = useNavigate();

  const handleClickShop = (e) => {
    e.preventDefault();
    navigate("/shop");
  };
  const handleClickMyAccount = (e) => {
    e.preventDefault();
    navigate("/my-account");
  };
  const handleClickOrder = (e) => {
    e.preventDefault();
    navigate("/track-your-order");
  };
  const handleDefault = (e) => {
    e.preventDefault();
  };
  const handleClickHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div id="TopBar">
      <div className="container">
        <div className="menu">
          <div className="menu-top-bar-left">
            <a href="/" className="wellcome" onClick={handleClickHome}>
              Welcome to Worldwide Electronics Store
            </a>
          </div>
          <div className="menu-top-bar-right">
            <ul>
              <li>
                <a href="/" onClick={handleDefault}>
                  <EnvironmentOutlined />
                  Store Locator
                </a>
              </li>
              <li>
                <a href="/track-your-order" onClick={handleClickOrder}>
                  <CarOutlined />
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="/shop" onClick={handleClickShop}>
                  <ShoppingOutlined />
                  Shop
                </a>
              </li>
              <li>
                <a href="/my-account" onClick={handleClickMyAccount}>
                  <UserOutlined />
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
