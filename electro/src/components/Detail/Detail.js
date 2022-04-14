import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Rate, Row } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import withLoading from "../../HOCs/withLoading";
import { addReview } from "../../redux/action/reviewAction";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import ProductDetail from "../Product/ProductDetail/ProductDetail";
import "./Detail.scss";

const crumbsOld = ["Home", "Detail"];
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentsList = useSelector((state) => state.reviewReducer.review);
  const [comments, setComments] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const products = useSelector((state) => state.productReducer.products);
  const [crumbs, setCrumbs] = useState(crumbsOld);
  useEffect(() => {
    const idx = products.findIndex((val) => val._id === id);
    if (idx !== -1) {
      setProductDetail(products[idx]);

      setCrumbs(["Home", "Shop", products[idx].name]);
    }
  }, [products]);

  useEffect(() => {
    const cmt = commentsList.filter((val) => val.id === id);
    if (cmt) {
      setComments(cmt);
    }
  }, [commentsList]);
  const formTailLayout = {
    labelCol: {
      sm: 6,
      md: 8,
      lg: 6,
      xs: 24,
    },
    wrapperCol: {
      sm: { offset: 2 },
    },
  };
  const onFinish = (value) => {
    dispatch(addReview({ ...value, id: id }));
  };
  return (
    <div id="Detail">
      <div className="container">
        <BreadcrumbComponent crumbs={crumbs} />
        {productDetail && (
          <>
            <ProductDetail productDetail={productDetail} />
            <div className="reviews">
              <div className="tab-title">
                <h3>Reviews</h3>
              </div>
              <div className="reviews-wrap">
                <Row gutter={30}>
                  <Col md={12} xs={24} sm={24}>
                    <div className="all-reviews">
                      <h3 className="title">Based on 0 reviews</h3>
                      <div className="avg-rating">
                        <span className="avg-rating-number">0.0</span>
                        overall
                      </div>
                      <div className="rating-histogram">
                        <div className="rating-bar">
                          <div className="star-rating">
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                          </div>
                          <div className="rating-percentage-bar"></div>
                          <div className="rating-count">0</div>
                        </div>
                        <div className="rating-bar">
                          <div className="star-rating">
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                          </div>
                          <div className="rating-percentage-bar"></div>
                          <div className="rating-count">0</div>
                        </div>
                        <div className="rating-bar">
                          <div className="star-rating">
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                          </div>
                          <div className="rating-percentage-bar"></div>
                          <div className="rating-count">0</div>
                        </div>
                        <div className="rating-bar">
                          <div className="star-rating">
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                          </div>
                          <div className="rating-percentage-bar"></div>
                          <div className="rating-count">0</div>
                        </div>
                        <div className="rating-bar">
                          <div className="star-rating">
                            <StarFilled style={{ color: "#fed700" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                            <StarOutlined style={{ color: "#b6b6b6" }} />
                          </div>
                          <div className="rating-percentage-bar"></div>
                          <div className="rating-count">0</div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xs={24} sm={24}>
                    <div className="you-review">
                      <h3 className="title">
                        Be the first to review “{productDetail.name}”
                      </h3>
                      <Form onFinish={onFinish}>
                        <Form.Item
                          name="rate"
                          label="Your Rating"
                          {...formTailLayout}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Rate />
                        </Form.Item>
                        <Form.Item
                          name="review"
                          label="Your Review"
                          {...formTailLayout}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input.TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                          name="name"
                          label="Name"
                          {...formTailLayout}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="email"
                          label="Email"
                          {...formTailLayout}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item>
                          <Checkbox>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </Checkbox>
                        </Form.Item>
                        <Button htmlType="submit">Add Review</Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
                <div className="comments">
                  <p>There are no reviews yet.</p>
                </div>
                <ul className="comments-list">
                  {comments.map((comment, index) => (
                    <li key={index}>
                      <div className="star-rating">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => {
                            if (index < comment.rate)
                              return (
                                <StarFilled
                                  key={index}
                                  style={{ color: "#fed700" }}
                                />
                              );
                            else
                              return (
                                <StarOutlined
                                  key={index}
                                  style={{ color: "#b6b6b6" }}
                                />
                              );
                          })}
                      </div>
                      <p className="comment-desc">{comment.review}</p>
                      <p className="comment-meta">
                        Your comment is awaiting approval
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withLoading(Detail);
