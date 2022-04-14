import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./BrandsSlider.scss";
const BrandsSlider = () => {
  const SlickArrowLeft = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <LeftOutlined />
    </div>
  );
  const SlickArrowRight = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
      <RightOutlined />
    </div>
  );
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    infinite: true,
    speed: 1500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="BrandsSlider">
      <div className="container">
        <Slider
          {...settings}
          prevArrow={<SlickArrowLeft />}
          nextArrow={<SlickArrowRight />}
        >
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png"
                alt=""
              />
            </Link>
          </div>
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png"
                alt=""
              />
            </Link>
          </div>
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png"
                alt=""
              />
            </Link>
          </div>
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png"
                alt=""
              />
            </Link>
          </div>
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png"
                alt=""
              />
            </Link>
          </div>
          <div className="brand-item">
            <Link to="/">
              <img
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest6.png"
                alt=""
              />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSlider;
