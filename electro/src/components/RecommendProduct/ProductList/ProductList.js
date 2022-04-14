import { Col } from "antd";
import ProductRecommend from "../../Product/ProductRecommend/ProductRecommend";
import "./ProductList.scss";
const ProductList = ({ title, products }) => {
  return (
    <Col xl={6} lg={12} md={0} xs={0}>
      <div className="product-recommend">
        <h4 className="product-recommend-title">{title}</h4>
        <div className="product-recommend-list">
          {products.map((product) => (
            <ProductRecommend key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Col>
  );
};

export default ProductList;
