import { Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import "./HomeSlider.scss";
const HomeSlider = () => {
  return (
    <div id="HomeSlider">
      <Carousel lazyLoad={true}>
        <div className="home-slider-item-first">
          <div className="home-slider-item-first-text">
            <h2>The new</h2>
            <h2>standard</h2>
            <h5>under favorable smartwatches</h5>
            <div className="home-slider-item-price">
              <h3>From</h3>
              <p>
                <span>$</span>
                749
              </p>
            </div>
            <Link to="/shop">
              <Button>Start Buying</Button>
            </Link>
          </div>
          <div className="home-slider-item-first-img">
            <Link to="/shop">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2020/02/smartwatches-resized.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="home-slider-item">
          <div className="home-slider-item-first-text">
            <h3>shop to get what you love</h3>
            <h2>
              timepieces that make a statement up to <span>40% off</span>
            </h2>
            <Link to="/shop">
              <Button>Start Buying</Button>
            </Link>
          </div>
          <div className="home-slider-item-img">
            <Link to="/shop">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="home-slider-item">
          <div className="home-slider-item-first-text last-text">
            <h3>shop to get what you love</h3>
            <h2>
              timepieces that make a statement up to <span>40% off</span>
            </h2>
            <Link to="/shop">
              <Button>Start Buying</Button>
            </Link>
          </div>
          <div className="home-slider-item-img">
            <Link to="/shop">
              <img
                className="last-img"
                src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Smartphones.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default HomeSlider;
