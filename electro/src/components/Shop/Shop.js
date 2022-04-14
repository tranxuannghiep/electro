import { Button, Col, Drawer, Row, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import withLoading from "../../HOCs/withLoading";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import Compare from "../Compare/Compare";
import FilterProduct from "./FilterProduct/FilterProduct";
import LatestProduct from "./LatestProduct/LatestProduct";
import ProductShop from "./ProductShop/ProductShop";
import Recommend from "./Recommend/Recommend";
import SideBar from "./SideBar/SideBar";
import { useQuery } from "../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../redux/action/filterAction";
import { useEffect } from "react";
const crumbs = ["Home", "Shop"];

const Shop = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [query] = useQuery();

  useEffect(() => {
    dispatch(filterProduct(query));
  }, [query]);
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div id="Shop" style={{ paddingBottom: 60 }}>
      <div className="container">
        <BreadcrumbComponent crumbs={crumbs} />
        <Row gutter={30}>
          <Col xl={6} sm={0} xs={0}>
            <SideBar />
            <FilterProduct />
            <img
              src="https://electro.madrasthemes.com/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
              alt=""
            />
            <LatestProduct products={products.slice(-5)} />
          </Col>
          <Col xl={18} sm={24} xs={24}>
            <Recommend />
            <ProductShop setVisible={setVisible} />
          </Col>
        </Row>
      </div>
      <Compare />
      <Drawer
        placement="left"
        onClose={onClose}
        visible={visible}
        closable={false}
        title="Filter Product"
        className="drawer-default"
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <SideBar />
        <FilterProduct />
        <img
          src="https://electro.madrasthemes.com/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
          alt=""
        />
        <LatestProduct products={products.slice(-5)} />
      </Drawer>
    </div>
  );
};

export default withLoading(Shop);
