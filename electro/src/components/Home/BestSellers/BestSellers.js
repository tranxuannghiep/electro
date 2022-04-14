import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductHor from "../../Product/ProductHor/ProductHor";

import "./BestSellers.scss";

const BestSellers = () => {
  const products = useSelector((state) => state.productReducer.products);
  const settings = {
    slidesToShow: 1,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          rows: 2,
          slidesPerRow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesPerRow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          rows: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesPerRow: 1,
          rows: 8,
        },
      },
    ],
  };
  return (
    <div id="BestSellers">
      <div className="container">
        <div className="nav-inline">
          <h3>Best Sellers</h3>
          <ul>
            <li>
              <Link to="/" className="nav-active">
                Top 20
              </Link>
            </li>
            <li>
              <Link to="/">Smart Phones & Tablets</Link>
            </li>
            <li>
              <Link to="/">Laptops & Computers</Link>
            </li>
            <li>
              <Link to="/">Video Cameras</Link>
            </li>
          </ul>
        </div>
        <Slider className="slide-slick-custom-row2" {...settings}>
          {products.slice(0, 19).map((product) => (
            <div key={product._id}>
              <ProductHor product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default BestSellers;
