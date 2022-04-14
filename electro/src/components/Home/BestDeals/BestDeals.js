import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import "./BestDeals.scss";

const BestDeals = () => {
  const products = useSelector((state) => state.productReducer.products);
  return (
    <div id="BestDeals">
      <div className="container">
        <ul className="nav-inline">
          <li>
            <Link to="/" className="nav-active">
              Best Deals
            </Link>
          </li>
          <li>
            <Link to="/">TV & Audio</Link>
          </li>
          <li>
            <Link to="/">Cameras</Link>
          </li>
          <li>
            <Link to="/">Audio</Link>
          </li>
          <li>
            <Link to="/">Smartphones</Link>
          </li>
          <li>
            <Link to="/">GPS & Navi</Link>
          </li>
          <li>
            <Link to="/">Computers</Link>
          </li>
          <li>
            <Link to="/">Portable Audio</Link>
          </li>
          <li>
            <Link to="/">Accessories</Link>
          </li>
        </ul>
        <Row>
          <Col md={8} sm={12} xs={24}>
            <Row>
              {products.slice(0, 4).map((product) => (
                <Col
                  className="product-best-deals"
                  key={product._id}
                  xl={12}
                  sm={24}
                  xs={24}
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={8} sm={0} xs={0}>
            <div className="product-img-large">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal.png"
                alt=""
              />
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <Row>
              {products.slice(-4).map((product) => (
                <Col
                  className="product-best-deals"
                  key={product._id}
                  xl={12}
                  sm={24}
                  xs={24}
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BestDeals;
