import { InputNumber, Table, Input, Button, Spin, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl/baseUrl";
import withLoading from "../../HOCs/withLoading";
import { deleteCart, updateCart } from "../../redux/action/cartAction";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import "./CartComponent.scss";
const crumbs = ["Home", "Cart"];
const CartComponent = () => {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cartReducer.carts);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const dataSource = carts.map((cart) => {
      return {
        ...cart,
        key: cart._id,
        remove: cart._id,
        subtotal: cart.quantity * cart.promotion_price,
      };
    });
    setData(dataSource);
  }, [carts]);

  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteCart(id));
  };
  const handleChange = (value, id) => {
    setUpdate(true);
    setData((data) => {
      const idx = data.findIndex((val) => val._id === id);
      data[idx].quantity = value;
      data[idx].subtotal = value * data[idx].promotion_price;
      return [...data];
    });
  };
  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(updateCart(data));
      setLoading(false);
    }, 800);
    setUpdate(false);
  };

  const columns = [
    {
      key: "1",
      title: "",
      dataIndex: "remove",
      render: (id) => (
        <a href="/" onClick={(e) => handleDelete(e, id)}>
          x
        </a>
      ),
    },
    {
      key: "2",
      title: "Product",
      dataIndex: "image",
      render: (src) => (
        <Link to="/cart" className="img" data-title="Product">
          <img src={`${baseUrl}/${src}`} alt="" />
        </Link>
      ),
    },
    {
      key: "3",
      title: "",
      dataIndex: "name",
      render: (text) => (
        <p className="cart-name" data-title="Name">
          {text}
        </p>
      ),
    },
    {
      key: "4",
      title: "Price",
      dataIndex: "promotion_price",
      render: (value) => <span data-title="Price">${value}</span>,
    },
    {
      key: "5",
      title: "Quantity",
      dataIndex: "quantity",
      render: (_, record) => {
        return (
          <InputNumber
            data-title="Quantity"
            min={0}
            value={record.quantity}
            onChange={(value) => handleChange(value, record.key)}
          />
        );
      },
    },
    {
      key: "6",
      title: "Subtotal",
      dataIndex: "subtotal",
      render: (value) => <span data-title="Subtotal"> $ {value}</span>,
    },
  ];

  return (
    <div id="CartComponent">
      <div className="container">
        <BreadcrumbComponent crumbs={crumbs} />
        <h2 className="title">Cart</h2>
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={data} pagination={false}></Table>
        </Spin>
        {carts.length ? (
          <>
            <div className="actions">
              <div className="action-coupon">
                <Input.Search
                  placeholder="Coupon code"
                  enterButton="Apply coupon"
                />
              </div>
              <div className="actions-submit">
                <Button
                  className="update-cart"
                  style={update ? {} : { pointerEvents: "none" }}
                  onClick={handleUpdate}
                >
                  Update cart
                </Button>
                <Button
                  onClick={() => navigate("/checkout")}
                  className="checkout"
                >
                  Proceed to checkout
                </Button>
              </div>
            </div>
            <Row>
              <Col lg={16} sm={0} xs={0}></Col>
              <Col lg={8} sm={24} xs={24}>
                <div className="cart-collaterals">
                  <div className="cart_totals">
                    <h3>Cart totals</h3>
                    <div className="subtotal">
                      <span>Subtotal</span>
                      <span className="subtotal-price">
                        $
                        {carts.reduce(
                          (acc, val) =>
                            acc + val.quantity * val.promotion_price,
                          0
                        )}
                      </span>
                    </div>
                    <div className="shipping">
                      <span>Shipping</span>
                      <div className="flat-rate">
                        <span>Flat rate:</span>
                        <span>$50</span>
                      </div>
                    </div>
                    <div className="total">
                      <span>Total</span>
                      <span>
                        $
                        {carts.reduce(
                          (acc, val) =>
                            acc + val.quantity * val.promotion_price,
                          0
                        ) + 50}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Button
              onClick={() => navigate("/checkout")}
              className="checkout-xs"
            >
              Proceed to checkout
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default withLoading(CartComponent);
