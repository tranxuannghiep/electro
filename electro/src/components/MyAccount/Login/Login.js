import { Button, Checkbox, Col, Form, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/action/userAction";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loadingLogin = useSelector((state) => state.userReducer.loadingLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    const { email, password } = value;
    dispatch(loginUser({ email, password }, navigate));
  };
  return (
    <Col md={12} xs={24} sm={24}>
      <div id="login">
        <h2>Login</h2>
        <p>Welcome back! Sign in to your account.</p>
        <Form
          onFinish={handleSubmit}
          labelCol={{
            span: 24,
          }}
        >
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
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button loading={loadingLogin} htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <p style={{ cursor: "pointer" }}>Lost your password?</p>
      </div>
    </Col>
  );
};

export default Login;
