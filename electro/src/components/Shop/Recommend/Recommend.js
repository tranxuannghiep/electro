import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Product from "../../Product/Product";

import "./Recommend.scss";

const Recommend = () => {
  const products = useSelector((state) => state.productReducer.products);

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
    slidesToScroll: 5,
    dots: true,
    infinite: false,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div id="Recommend">
      <div className="nav-inline">
        <h3>Recommended Products</h3>
      </div>
      <Slider
        {...settings}
        className="slide-slick-custom"
        prevArrow={<SlickArrowLeft />}
        nextArrow={<SlickArrowRight />}
      >
        {products.slice(0, 15).map((product) => (
          <div key={product._id}>
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Recommend;
