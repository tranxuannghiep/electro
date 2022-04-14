import {
  CheckOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../baseUrl/baseUrl";
import { addCart } from "../../../redux/action/cartAction";
import { addCompare } from "../../../redux/action/compareAction";
import { addWishlist } from "../../../redux/action/wishlistAction";
import "./ProductHor.scss";

const ProductHor = ({ product }) => {
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const compare = useSelector((state) => state.compareReducer.compare);
  const [checked, setChecked] = useState(false);
  const refWishlist = useRef();
  const [add, setAdd] = useState(false);
  const refCompare = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const idx = wishlist.findIndex((val) => val._id === product._id);
    if (idx !== -1) {
      setChecked(true);
    } else setChecked(false);
  }, [wishlist]);
  useEffect(() => {
    const idx = compare.findIndex((val) => val._id === product._id);
    if (idx !== -1) {
      setAdd(true);
    } else setAdd(false);
  }, [compare]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let category = "";
  product.category.forEach((val) => {
    category += val.sub_name + ", ";
  });
  category = category.slice(0, -2);
  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);

    dispatch(addCart({ ...product, quantity: 1 }));
  };
  const handleAddWishlist = (e) => {
    refWishlist.current.style.cursor = "wait";
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      refWishlist.current.style.cursor = "pointer";
      setLoading(false);
      dispatch(addWishlist(product));
    }, 800);
  };
  const handleAddCompare = (e) => {
    refCompare.current.style.cursor = "wait";
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      refCompare.current.style.cursor = "pointer";
      dispatch(addCompare(product));
      setLoading(false);
    }, 800);
  };
  const handleAddDetail = (e) => {
    e.preventDefault();
    navigate(`/product/${product._id}`);
  };
  return (
    <div className="ProductHor-wrap">
      <div className="ProductHor">
        <Spin spinning={loading}>
          <div className="product-hor-wrap">
            <a
              href={`/product/${product._id}`}
              className="product-hor-img"
              onClick={handleAddDetail}
            >
              <img src={`${baseUrl}/${product.image}`} alt="" />
            </a>
            <div className="product-hor-body">
              <span className="product-hor-category">
                {product.category.length
                  ? category
                  : product.parent_category[0].name}
              </span>
              <p className="product-hor-title">{product.name}</p>
              <div className="product-hor-footer">
                {product.origin_price === product.promotion_price ? (
                  <div className="product-hor-price">
                    ${product.origin_price}
                  </div>
                ) : (
                  <div className="product-hor-price">
                    <span className="product-hor-promotion-price">
                      ${product.promotion_price}
                    </span>
                    <span className="product-hor-origin-price">
                      ${product.origin_price}
                    </span>
                  </div>
                )}
                <div className="cart-icon" onClick={handleAdd}>
                  <Tooltip placement="top" title="Add to cart">
                    <ShoppingCartOutlined />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </Spin>
        <div className="hover-area">
          <div className="wishlist">
            {!checked ? (
              <a href="/" ref={refWishlist} onClick={handleAddWishlist}>
                <HeartOutlined />
                Wishlist
              </a>
            ) : (
              <span>
                <CheckOutlined /> Browse
              </span>
            )}
          </div>
          <div className="compare">
            {!add ? (
              <a href="/" ref={refCompare} onClick={handleAddCompare}>
                <SyncOutlined />
                Compare
              </a>
            ) : (
              <span>
                <CheckOutlined /> Added
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHor;
