import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import "./RecommendProduct.scss";

const RecommendProduct = () => {
  const products = useSelector((state) => state.productReducer.products);
  const productsOnSale = products.filter(
    (product) => product.origin_price !== product.promotion_price
  );
  return (
    <div className="container" style={{ marginTop: 40, marginBottom: 45 }}>
      <Row gutter={30}>
        <ProductList
          title="Featured Products"
          products={products.slice(0, 3)}
        />
        <ProductList
          title="Top Selling Products"
          products={products.slice(0, 3)}
        />
        <ProductList
          title="On-sale Products"
          products={productsOnSale.slice(0, 3)}
        />
        <Col xl={6} lg={12} md={0} xs={0}>
          <Link to="/" className="brand-adv">
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2019/04/footer-widget-img-01.jpg"
              alt=""
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default RecommendProduct;
