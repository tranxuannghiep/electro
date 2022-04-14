import { MinusOutlined } from "@ant-design/icons";
import { Button, Slider } from "antd";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "../../../hooks/useQuery";

import "./FilterProduct.scss";

const FilterProduct = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [query, setQuery] = useQuery();

  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    if (products.length) {
      const minPriceDefault = products.reduce(
        (min, val) => Math.min(min, val.promotion_price),
        products[0].promotion_price
      );
      const maxPriceDefault = products.reduce(
        (max, val) => Math.max(max, val.promotion_price),
        products[0].promotion_price
      );

      setMinPrice(minPriceDefault);
      setMaxPrice(maxPriceDefault);
    }
    const { price_min, price_max } = query;
    if (price_min) {
      setMinPrice(price_min);
    }
    if (price_max) {
      setMaxPrice(price_max);
    }
  }, [products, query.price_min, query.price_max]);

  function onChange(value) {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  }
  const handleSearchPrice = () => {
    setQuery({ ...query, price_min: minPrice, price_max: maxPrice });
  };
  return (
    <div id="FilterProduct">
      <div className="title">
        <h3>Filters</h3>
      </div>
      <div className="filter-price">
        <h4>Price</h4>
        <Slider
          range
          value={[minPrice, maxPrice]}
          min={0}
          max={5000}
          tooltipVisible={false}
          handleStyle={{ borderColor: "#fed700", color: "fed700" }}
          autoFocus={false}
          trackStyle={{ background: "#aaa" }}
          onChange={onChange}
          step={10}
        />
        <div className="price_label">
          <p>
            Price: <span>${minPrice}</span>
            <MinusOutlined style={{ margin: "0 5px" }} />
            <span>${maxPrice}</span>
          </p>
        </div>
      </div>
      <Button onClick={handleSearchPrice} className="btn-filter">
        Filter
      </Button>
    </div>
  );
};
export default FilterProduct;
