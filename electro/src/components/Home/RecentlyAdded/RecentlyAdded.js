import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Product from "../../Product/Product";
import "./RecentlyAdded.scss";

const RecentlyAdded = () => {
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
    slidesToShow: 7,
    slidesToScroll: 7,
    dots: true,
    infinite: false,
    speed: 1500,

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 3, dots: false },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: false },
      },

      // {
      //   breakpoint: 768,
      //   settings: {},
      // },
      // {
      //   breakpoint: 576,
      //   settings: {},
      // },
    ],
  };
  return (
    <div id="RecentlyAdded">
      <div className="container">
        <div className="nav-inline">
          <h3>Recently Added</h3>
        </div>
        <Slider
          className="slide-slick-custom"
          {...settings}
          prevArrow={<SlickArrowLeft />}
          nextArrow={<SlickArrowRight />}
        >
          {products.slice(0, 16).map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecentlyAdded;
