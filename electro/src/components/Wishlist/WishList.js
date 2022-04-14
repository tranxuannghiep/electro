import {
  FacebookFilled,
  InstagramOutlined,
  MailFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Spin, Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseUrl } from "../../baseUrl/baseUrl";
import withLoading from "../../HOCs/withLoading";
import { deleteWishlist } from "../../redux/action/wishlistAction";
import "./WishList.scss";

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlistReducer.wishlist);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = (e, id) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteWishlist(id));
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    const dataSource = wishlist.map((val) => {
      return {
        ...val,
        key: val._id,
        remove: val._id,
      };
    });
    setData(dataSource);
  }, [wishlist]);
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
        <Link to="/wishlist" className="img">
          <img src={`${baseUrl}/${src}`} alt="" />
        </Link>
      ),
    },
    {
      key: "3",
      title: "Name",
      dataIndex: "name",
      render: (text) => <p className="cart-name">{text}</p>,
    },
    {
      key: "4",
      title: "Price",
      dataIndex: "promotion_price",
      render: (value) => `$${value}`,
    },
  ];
  return (
    <div id="WishList">
      <div className="container">
        <h3>My wishlist on Electro</h3>
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={data} pagination={false}></Table>
        </Spin>
        <div className="share-social">
          <p>Share on:</p>
          <ul>
            <li>
              <a target="_blank" href="/" className="icon-face">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a target="_blank" href="/" className="icon-twit">
                <TwitterOutlined />
              </a>
            </li>
            <li>
              <a target="_blank" href="/" className="icon-insta">
                <InstagramOutlined />
              </a>
            </li>
            <li>
              <a target="_blank" href="/" className="icon-mail">
                <MailFilled />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default withLoading(WishList);
