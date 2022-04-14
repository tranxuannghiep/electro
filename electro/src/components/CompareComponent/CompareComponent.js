import { Button, Col, Input, Modal, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/baseUrl";
import withLoading from "../../HOCs/withLoading";
import { addCart } from "../../redux/action/cartAction";
import { addCompare, deleteCompare } from "../../redux/action/compareAction";
import "./CompareComponent.scss";

const CompareComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const compare = useSelector((state) => state.compareReducer.compare);
  const productsReducer = useSelector((state) => state.productReducer.products);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [keyword, setKeyword] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    const newProduct = [];
    for (let i = 0; i < 3; i++) {
      if (compare[i]) newProduct.push(compare[i]);
      else {
        newProduct.push(false);
      }
    }
    setProducts(newProduct);
  }, [compare]);
  const handleDelete = (e, id) => {
    e.target.style.cursor = "wait";
    setTimeout(() => {
      e.target.style.cursor = "pointer";
      dispatch(deleteCompare(id));
    }, 800);
  };
  const category = (product) => {
    let category = "";
    product.category.forEach((val) => {
      category += val.sub_name + ", ";
    });
    category = category.slice(0, category.length - 2);
    return category;
  };
  const handleBuyNow = (id) => {
    const idx = productsReducer.findIndex((val) => val._id === id);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/cart");
    }, 800);
    dispatch(addCart(productsReducer[idx]));
  };
  const handleAddCompare = (e, id) => {
    const idx = productsReducer.findIndex((val) => val._id === id);
    e.target.style.cursor = "wait";
    setTimeout(() => {
      e.target.style.cursor = "pointer";
      dispatch(addCompare(productsReducer[idx]));
    }, 800);
  };
  return (
    <div id="CompareComponent">
      <div className="container">
        <h3>Compare Product</h3>
        <div className="compare-product-wrap">
          <img
            src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg"
            alt=""
          />
          <Spin spinning={loading}>
            <Row>
              <Col lg={6} sm={0} xs={0}>
                <div className="title">
                  <span>Product</span>
                </div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <img src={`${baseUrl}/${product.image}`} alt="" />
                        <p className="compare-product-name">{product.name}</p>
                        <span
                          onClick={(e) => handleDelete(e, product._id)}
                          className="compare-product-delete"
                        >
                          x
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add">
                        <img
                          onClick={showModal}
                          src="https://cdn.tgdd.vn/mwgcart/mwg-site/ContentMwg/images/iconcompare/icon_add_desktop.png"
                          alt=""
                        />
                        <p>Thêm sản phẩm</p>
                      </div>
                    </Col>
                  );
                }
              })}
              <Col lg={6} sm={0} xs={0}>
                <div className="title">
                  <span>Price</span>
                </div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <span className="compare-product-price">
                          ${product.promotion_price}
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add"></div>
                    </Col>
                  );
                }
              })}
              <Col lg={6} sm={0} xs={0}>
                <div className="title">
                  <span>Description</span>
                </div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <span className="compare-product-description">
                          {product.description || "-"}
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add"></div>
                    </Col>
                  );
                }
              })}
              <Col lg={6} sm={0} xs={0}>
                <div className="title">
                  <span>Dimensions</span>
                </div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <span className="compare-product-dimensions">
                          {product.description || "-"}
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add"></div>
                    </Col>
                  );
                }
              })}
              <Col lg={6} sm={0} xs={0}>
                <div className="title">
                  <span>Category</span>
                </div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <span className="compare-product-category">
                          {product.parent_category.length
                            ? product.parent_category
                            : "" || category(product)}
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add"></div>
                    </Col>
                  );
                }
              })}
              <Col lg={6} sm={0} xs={0}>
                <div className="title"></div>
              </Col>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="compare-product">
                        <span className="compare-product-buy-now">
                          <Button onClick={() => handleBuyNow(product._id)}>
                            {" "}
                            Buy now
                          </Button>
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} xs={0} sm={0} md={8} lg={6}>
                      <div className="product-add"></div>
                    </Col>
                  );
                }
              })}
            </Row>
          </Spin>
          <Modal
            title="Add Compare"
            visible={isModalVisible}
            footer={null}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input.Search
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            {keyword.length
              ? productsReducer
                  .filter((product) =>
                    product.name.toLowerCase().includes(keyword.toLowerCase())
                  )
                  .map((val) => (
                    <div key={val._id} className="product-search-wrap">
                      <div className="product-search">
                        <img src={`${baseUrl}/${val.image}`} alt="" />
                        <div className="product-search-body">
                          <p className="product-search-body-name">{val.name}</p>
                          <span className="product-search-body-price">
                            $ {val.promotion_price}
                          </span>
                        </div>
                      </div>
                      <Button onClick={(e) => handleAddCompare(e, val._id)}>
                        Add Compare
                      </Button>
                    </div>
                  ))
              : ""}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default withLoading(CompareComponent);
