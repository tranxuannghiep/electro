import { RightCircleFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./HomeAdv.scss";

const HomeAdv = () => {
  return (
    <div id="HomeAdv">
      <div className="container">
        <Row gutter={20}>
          <Col xxl={6} xl={8} md={12} sm={24} xs={24}>
            <div className="home-adv-item">
              <Link to="/shop">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png"
                  alt=""
                />
                <div className="home-adv-item-body">
                  <p>
                    Catch Big <span> deals </span>on the Cameras
                  </p>
                  <div className="btn-shop">
                    <span>Shop now</span>
                    <RightCircleFilled />
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={6} xl={8} md={12} sm={24} xs={24}>
            <div className="home-adv-item">
              <Link to="/shop">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png"
                  alt=""
                />
                <div className="home-adv-item-body">
                  <p>
                    Tablets, Smartphones <span> and more </span>
                  </p>
                  <div className="sale-off">
                    <span className="upto">Up to</span>
                    <span className="value">70</span>
                    <span className="suffix">%</span>
                    <RightCircleFilled />
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={6} xl={8} md={12} sm={24} xs={24}>
            <div className="home-adv-item">
              <Link to="/shop">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png"
                  alt=""
                />
                <div className="home-adv-item-body">
                  <p>
                    Shop the<span> Hottest </span>Products
                  </p>
                  <div className="btn-shop">
                    <span>Shop now</span>
                    <RightCircleFilled />
                  </div>
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={6} xl={0} md={12} sm={24} xs={24}>
            <div className="home-adv-item">
              <Link to="/shop">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2018/10/360-camers.png"
                  alt=""
                />
                <div className="home-adv-item-body">
                  <p>
                    Shop the<span> Hottest </span>Products
                  </p>
                  <div className="btn-shop">
                    <span>Shop now</span>
                    <RightCircleFilled />
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default HomeAdv;
