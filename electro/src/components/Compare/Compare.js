import { DownOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/baseUrl";
import {
  addCompare,
  deleteCompare,
  deleteCompareAll,
} from "../../redux/action/compareAction";
import "./Compare.scss";

const Compare = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const compare = useSelector((state) => state.compareReducer.compare);
  const [products, setProducts] = useState([]);
  const productsReducer = useSelector((state) => state.productReducer.products);
  const [show, setShow] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    const newProduct = [];
    for (let i = 0; i < 3; i++) {
      if (compare[i]) newProduct.push(compare[i]);
      else {
        newProduct.push(false);
      }
    }
    setProducts(newProduct);
    if (compare.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [compare]);
  const handleZoomOut = () => {
    document.querySelector(".compare-show").classList.add("ani-zoom-out");
    document.querySelector(".zoom-in").classList.remove("ani-zoom-out");
    document.querySelector(".zoom-in").classList.add("ani-zoom-in");
  };
  const handleZoomIn = () => {
    document.querySelector(".compare-show").classList.add("ani-zoom-in");
    document.querySelector(".zoom-in").classList.add("ani-zoom-out");

    document.querySelector(".compare-show").classList.remove("ani-zoom-out");
    document.querySelector(".zoom-in").classList.remove("ani-zoom-in");
  };
  const handleDelete = (e, id) => {
    e.target.style.cursor = "wait";
    setTimeout(() => {
      e.target.style.cursor = "pointer";
      dispatch(deleteCompare(id));
    }, 800);
  };
  const handleDeleteAll = (e) => {
    e.target.style.cursor = "wait";
    setTimeout(() => {
      e.target.style.cursor = "pointer";
      dispatch(deleteCompareAll());
    }, 800);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
    <div id="Compare">
      {show && (
        <div className="container">
          <Button className="zoom-in ani-zoom-out" onClick={handleZoomIn}>
            So sánh ({compare.length})
          </Button>
          <div className="compare-show ani-zoom-in">
            <Row>
              {products.map((product, index) => {
                if (product) {
                  return (
                    <Col key={index} span={6}>
                      <div className="product">
                        <img src={`${baseUrl}/${product.image}`} alt="" />
                        <p>{product.name}</p>
                        <span onClick={(e) => handleDelete(e, product._id)}>
                          x
                        </span>
                      </div>
                    </Col>
                  );
                } else {
                  return (
                    <Col key={index} span={6}>
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

              <Col span={6}>
                <div className="compare-now">
                  <Button
                    onClick={() => navigate("/compare")}
                    className={compare.length <= 1 ? "pointer-none" : ""}
                  >
                    So sánh ngay
                  </Button>
                  <p onClick={handleDeleteAll}>Xóa tất cả sản phẩm</p>
                </div>
              </Col>
            </Row>
            <Button className="zoom-out" onClick={handleZoomOut}>
              Thu gọn <DownOutlined />
            </Button>
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
                            <p className="product-search-body-name">
                              {val.name}
                            </p>
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
      )}
    </div>
  );
};

export default Compare;
