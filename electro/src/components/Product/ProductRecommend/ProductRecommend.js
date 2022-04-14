import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../baseUrl/baseUrl";
import "./ProductRecommend.scss";

const ProductRecommend = ({ product }) => {
  const navigate = useNavigate();
  const handleAddDetail = (e) => {
    e.preventDefault();
    navigate(`/product/${product._id}`);
  };
  return (
    <div id="ProductRecommend">
      <div className="product-recommend-item">
        <div className="product-recommend-item-img">
          <a href="/" onClick={handleAddDetail}>
            <img src={`${baseUrl}/${product.image}`} alt="" />
          </a>
        </div>
        <div className="product-recommend-item-body">
          <span className="product-recommend-item-name">{product.name}</span>
          <div className="product-recommend-item-star">
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarOutlined />
          </div>
          {product.origin_price === product.promotion_price ? (
            <span className="product-recommend-item-price">
              ${product.origin_price}
            </span>
          ) : (
            <span className="product-recommend-item-price">
              <span className="product-recommend-item-price-sale">
                ${product.promotion_price}
              </span>
              <span className="product-recommend-item-price-current">
                ${product.origin_price}
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommend;
