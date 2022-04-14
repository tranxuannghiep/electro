import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import SlideToggle from "react-slide-toggle";
import "./Checkout.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderProduct } from "../../redux/action/orderAction";
import { clearCart } from "../../redux/action/cartAction";
import withLoading from "../../HOCs/withLoading";
const crumbs = ["Home", "Cart", "Checkout"];
const Checkout = () => {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();
  const [showShipping, setShowShipping] = useState(false);
  const handleToggleCoupon = (e, toggle) => {
    e.preventDefault();
    toggle();
  };
  const handleToggleShipping = (toggle) => {
    if (!showShipping) {
      setShowShipping(!showShipping);
      setTimeout(() => {
        toggle();
      }, 300);
    } else {
      toggle();
      setTimeout(() => {
        setShowShipping(!showShipping);
      }, 300);
    }
  };

  const onFinish = (value) => {
    dispatch(orderProduct({ user: value, carts }));
    dispatch(clearCart());
    navigate("/order-success");
  };

  return (
    <div id="Checkout">
      <div className="container">
        <BreadcrumbComponent crumbs={crumbs} />
        {carts.length ? (
          <>
            <h2 className="title">Checkout</h2>
            <SlideToggle
              collapsed
              render={({ toggle, setCollapsibleElement }) => (
                <>
                  <div className="have-a-coupon">
                    <p>
                      Have a coupon?
                      <a
                        href="/"
                        onClick={(e) => handleToggleCoupon(e, toggle)}
                      >
                        Click here to enter your code
                      </a>
                    </p>
                  </div>

                  <div className="checkout-coupon" ref={setCollapsibleElement}>
                    <p>If you have a coupon code, please apply it below.</p>
                    <div className="checkout-action-coupon">
                      <Input.Search
                        placeholder="Coupon code"
                        enterButton="Apply coupon"
                      />
                    </div>
                  </div>
                </>
              )}
            />
            <div className="form-checkout">
              <Form
                onFinish={onFinish}
                labelCol={{
                  span: 24,
                }}
              >
                <Row gutter={30}>
                  <Col xl={14} lg={12} sm={24} xs={24}>
                    <h3 className="title">Billing details</h3>
                    <Row gutter={30}>
                      <Col md={12} sm={24} xs={24}>
                        <Form.Item
                          label="First name"
                          name="firstname"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col md={12} sm={24} xs={24}>
                        <Form.Item
                          label="Last name"
                          name="lastname"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Company name (optional)"
                          name="company"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Street address"
                          name="street"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Town / City"
                          name="city"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Phone"
                          name="phone"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          label="Email address"
                          name="email"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <h3 className="title">Shipping Details</h3>
                      </Col>

                      <Col span={24}>
                        <SlideToggle
                          collapsed
                          render={({ toggle, setCollapsibleElement }) => (
                            <>
                              <Row>
                                <Col span={24}>
                                  <Form.Item
                                    name="differentAddress"
                                    valuePropName="checked"
                                  >
                                    <Checkbox
                                      onClick={() =>
                                        handleToggleShipping(toggle)
                                      }
                                    >
                                      Ship to a different address?
                                    </Checkbox>
                                  </Form.Item>
                                </Col>
                                <Col span={24} ref={setCollapsibleElement}>
                                  {showShipping && (
                                    <Row gutter={30}>
                                      <Col md={12} sm={24} xs={24}>
                                        <Form.Item
                                          label="First name"
                                          name="shipping_firstname"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col md={12} sm={24} xs={24}>
                                        <Form.Item
                                          label="Last name"
                                          name="shipping_lastname"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={24}>
                                        <Form.Item
                                          label="Company name (optional)"
                                          name="shipping_company"
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={24}>
                                        <Form.Item
                                          label="Street address"
                                          name="shipping_street"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={24}>
                                        <Form.Item
                                          label="Town / City"
                                          name="shipping_city"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={24}>
                                        <Form.Item
                                          label="Phone"
                                          name="shipping_phone"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={24}>
                                        <Form.Item
                                          label="Email address"
                                          name="shipping_email"
                                          rules={[
                                            {
                                              required: true,
                                            },
                                          ]}
                                        >
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                  )}
                                </Col>
                              </Row>
                            </>
                          )}
                        />
                      </Col>

                      <Col span={24}>
                        <Form.Item label="Order notes (optional)" name="note">
                          <Input.TextArea
                            rows={4}
                            placeholder="Notes about your order, e.g. special notes for delivery."
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={10} lg={12} sm={24} xs={24}>
                    <div className="your-order">
                      <h3 className="title">Your order</h3>
                      <div className="product-table-title">
                        <span>Product</span>
                        <span>Subtotal</span>
                      </div>
                      <ul>
                        {carts.map((cart) => (
                          <li key={cart._id}>
                            <span>
                              {cart.name}

                              <span className="amount">
                                {" "}
                                {"  "} x {cart.quantity}
                              </span>
                            </span>
                            <span>${cart.quantity * cart.promotion_price}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="product-table-title">
                        <span>Subtotal</span>
                        <span className="subtotal">
                          $
                          {carts.reduce(
                            (acc, val) =>
                              acc + val.quantity * val.promotion_price,
                            0
                          )}
                        </span>
                      </div>
                      <div className="shipping-wrap">
                        <span className="shipping">Shipping</span>
                        <div className="flat-rate">
                          <span>Flat rate:</span>
                          <span>$50</span>
                        </div>
                      </div>
                      <div className="product-table-title order-total">
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
                      <div className="bank-transfer">
                        <h4> Direct bank transfer</h4>
                        <p className="bank-transfer-desc">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                        <p>
                          Your personal data will be used to process your order,
                          support your experience throughout this website, and
                          for other purposes described in our privacy policy.
                        </p>
                      </div>
                      <div className="agree">
                        <Form.Item
                          name="agree"
                          valuePropName="checked"
                          rules={[
                            {
                              validator: (_, value) =>
                                value
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      new Error("Should accept agreement")
                                    ),
                            },
                          ]}
                        >
                          <Checkbox>
                            I have read and agree to the website{" "}
                            <a href="/">terms and conditions</a>
                          </Checkbox>
                        </Form.Item>
                      </div>
                      <Form.Item>
                        <Button htmlType="submit">Place order</Button>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        ) : (
          <>
            <div className="cart-empty">
              <p>Your cart is currently empty.</p>
            </div>
            <div className="return-shop">
              <Button onClick={() => navigate("/shop")}>Return to shop</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default withLoading(Checkout);
