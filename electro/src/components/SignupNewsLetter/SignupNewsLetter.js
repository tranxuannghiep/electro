import { SendOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import "./SignupNewsLetter.scss";
const SignupNewsLetter = () => {
  return (
    <div id="SignupNewsLetter">
      <div className="container">
        <Row style={{ alignItems: "center" }}>
          <Col span={14}>
            <div className="newsletter-left">
              <h5 className="newsletter">
                <SendOutlined
                  style={{
                    marginRight: 15,
                    transform: "rotate(-55deg)",
                    opacity: ".8",
                  }}
                />
                Sign up to Newsletter
              </h5>
              <span className="newsletter-marketing-text">
                ...and receive<strong> $20 coupon for first shopping</strong>
              </span>
            </div>
          </Col>
          <Col span={10}>
            <div className="newsletter-form">
              <Input.Search
                placeholder="Enter your email address"
                allowClear
                enterButton="SignUp"
                size="large"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SignupNewsLetter;
