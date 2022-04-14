import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, InputNumber, Row } from "antd";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../baseUrl/baseUrl";
import { useDispatch } from "react-redux";
import "./ProductDetail.scss";
import { addCart } from "../../../redux/action/cartAction";

const ProductDetail = ({ productDetail }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);

  const [product, setProduct] = useState(null);
  let category = "";
  useEffect(() => {
    setProduct(productDetail);
  }, [productDetail]);
  product?.category.forEach((val) => {
    category += val.sub_name + ", ";
  });
  category = category.slice(0, category.length - 2);
  const handleAddProduct = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(addCart({ ...product, quantity: number }));
    }, 1000);
  };
  return (
    <div id="ProductDetail">
      <div className="product-detail">
        {product ? (
          <Row gutter={30}>
            <Col md={10} sm={24} xs={24}>
              <img src={`${baseUrl}/${product.image}`} alt="" />
            </Col>
            <Col md={14} sm={24} xs={24}>
              <div className="product-detail-body">
                <span className="product-detail-category">
                  {product.category.length
                    ? category
                    : product.parent_category[0].name}
                </span>
                <p className="product-detail-name">{product.name}</p>
                <div className="product-detail-desc">
                  <ul>
                    <li>4.5 inch HD Screen</li>
                    <li>Android 4.4 KitKat OS</li>
                    <li>1.4 GHz Quad Core™ Processor</li>
                    <li>20 MP front Camera</li>
                  </ul>
                </div>

                {product.origin_price === product.promotion_price ? (
                  <div className="product-detail-price">
                    ${product.origin_price}
                  </div>
                ) : (
                  <div className="product-detail-price">
                    <span className="product-detail-promotion-price">
                      ${product.promotion_price}
                    </span>
                    <span className="product-detail-origin-price">
                      ${product.origin_price}
                    </span>
                  </div>
                )}
                <div className="product-detail-actions">
                  <InputNumber
                    value={number}
                    onChange={(value) => setNumber(value > 0 ? value : number)}
                  />
                  <Button loading={loading} onClick={handleAddProduct}>
                    <ShoppingCartOutlined style={{ fontSize: 22 }} /> Add to
                    cart
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
