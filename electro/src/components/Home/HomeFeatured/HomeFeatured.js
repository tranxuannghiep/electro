import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import "./HomeFeatured.scss";

const HomeFeatured = () => {
  const products = useSelector((state) => state.productReducer.products);

  const [seconds, setSeconds] = useState(59);
  const [mins, setMins] = useState(59);
  const [hours, setHours] = useState(23);
  useEffect(() => {
    const timmer = window.setInterval(() => {
      setSeconds((seconds) => (seconds === 0 ? 59 : seconds - 1));
    }, 1000);
    if (mins === 0) setHours((hours) => (hours === 0 ? 23 : hours - 1));
    if (seconds === 0) setMins((mins) => (mins === 0 ? 59 : mins - 1));
    if (hours === 0) {
      setHours(23);
      setMins(59);
      setSeconds(59);
    }
    return () => clearInterval(timmer);
  }, [seconds]);
  return (
    <div id="HomeFeatured">
      <div className="container">
        <Row gutter={30}>
          <Col xs={24} sm={24} lg={10} xl={7}>
            <div className="deals-block">
              <div className="special-offer">
                <div className="special-offer-head">
                  <h2>Special Offer</h2>
                  <div className="save">
                    <p>
                      Save <span>$20.00</span>
                    </p>
                  </div>
                </div>
                <div className="special-offer-body">
                  <Link to="/">
                    <img
                      src="https://electro.madrasthemes.com/wp-content/uploads/2016/03/consal-300x300.png"
                      alt=""
                    />
                    <p>Game Console Controller + USB 3.0 Cable</p>
                  </Link>
                  <div className="special-offer-body-price">
                    <span className="special-offer-body-price-sale">
                      $79.00
                    </span>
                    <span className="special-offer-body-price-current">
                      $99.00
                    </span>
                  </div>
                  <div className="deal-countdown-timer">
                    <p className="deal-countdown-timer-text">
                      Hurry Up! Offer ends in:
                    </p>
                    <div className="deal-countdown">
                      <span className="hours">{hours}</span> :
                      <span className="mins">{mins}</span> :
                      <span className="seconds">{seconds}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} lg={14} xl={17}>
            <ul className="nav-inline">
              <li>
                <a href="/" className="nav-active">
                  Featured
                </a>
              </li>
              <li>
                <a href="/">On Sale</a>
              </li>
              <li>
                <a href="/">Top Rated</a>
              </li>
            </ul>
            <Row>
              {products.slice(0, 8).map((product) => (
                <Col key={product._id} xxl={6} sm={8} xs={12}>
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

export default HomeFeatured;
