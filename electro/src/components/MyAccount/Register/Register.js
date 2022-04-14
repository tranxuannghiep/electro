import { CheckOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../redux/action/userAction";
import "./Register.scss";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadingRegister = useSelector(
    (state) => state.userReducer.loadingRegister
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (value) => {
    dispatch(registerUser(value, navigate));
  };
  return (
    <Col md={12} xs={24} sm={24}>
      <div id="Register">
        <h2>Register</h2>
        <p>
          Create new account today to reap the benefits of a personalized
          shopping experience.
        </p>
        <Form
          onFinish={handleSubmit}
          labelCol={{
            span: 24,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
              },
            ]}
            style={{ color: "red" }}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <Form.Item>
            <Button loading={loadingRegister} htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <div className="register-benefits">
          <h3>Sign up today and you will be able to :</h3>{" "}
          <ul>
            <li>
              <CheckOutlined />
              Speed your way through checkout
            </li>
            <li>
              <CheckOutlined />
              Track your orders easily
            </li>
            <li>
              <CheckOutlined />
              Keep a record of all your purchases
            </li>
          </ul>
        </div>
      </div>
    </Col>
  );
};

export default Register;
