import {
  AppstoreFilled,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BarsOutlined,
  MenuOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Col, Input, Pagination, Row, Select, Spin, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productsRemainingSelector } from "../../../redux/reducer/selectors/selectors";
import Product from "../../Product/Product";
import "./ProductShop.scss";

const ProductShop = (props) => {
  const { Option } = Select;
  const products = useSelector(productsRemainingSelector);
  const keyword = useSelector((state) => state.filterReducer.search);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const categoryId = useSelector((state) => state.filterReducer.categoryId);
  const [spin, setSpin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [lastPage, setLastPage] = useState(
    Math.ceil(products.length / productsPerPage)
  );

  useEffect(() => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 1500);
    setLastPage(Math.ceil(products.length / productsPerPage));
  }, [products]);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;

  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handldeChangeSize = (value) => {
    if (value === "All") {
      setProductsPerPage(products.length);
      setLastPage(1);
    } else {
      setLastPage(Math.ceil(products.length / value));
      setProductsPerPage(+value);
    }
  };

  const getNameCate = (categories, id) => {
    const idx1 = categories.findIndex((val) => val._id === id);
    if (idx1 !== -1) return categories[idx1].name;
    else {
      return categories.reduce((acc, val) => {
        const idx = val.sub_categories.findIndex((v) => v._id === id);
        if (idx !== -1) {
          acc = val.sub_categories[idx].sub_name;
        }
        return acc;
      }, "");
    }
  };
  const title = (keyword, name) => {
    if (!keyword.trim().length && !name.length) return "Shop";
    if (name.length && keyword.trim().length)
      return `${name} - Search for "${keyword}"`;
    if (name.length) return name;
    if (keyword.trim().length) return `Search for "${keyword}"`;
  };

  const showDrawer = () => {
    props.setVisible(true);
  };

  return (
    <Spin spinning={spin}>
      <div id="ProductShop">
        <div className="shop-title">
          <h3>{title(keyword, getNameCate(categories, categoryId))}</h3>
          <p className="show-number-of-results">
            Showing {indexOfFirstPost + 1}–{indexOfLastPost} of{" "}
            {products.length}
            results
          </p>
        </div>
        <div className="nav-inline">
          <ul>
            <li className="show-view-switcher">
              <Tooltip placement="bottom" title="Grid View">
                <AppstoreFilled style={{ fontSize: 22 }} />
              </Tooltip>
              <Tooltip placement="bottom" title="Grid Extended View">
                <MenuOutlined style={{ fontSize: 19 }} />
              </Tooltip>
              <Tooltip placement="bottom" title="List View">
                <UnorderedListOutlined style={{ fontSize: 21 }} />
              </Tooltip>
              <Tooltip placement="bottom" title="List View Small">
                <BarsOutlined style={{ fontSize: 21 }} />
              </Tooltip>
            </li>
            <li className="show-filter" onClick={showDrawer}>
              <MenuOutlined />
              Filter
            </li>
            <li className="nav-select">
              <div className="select-filter">
                <Select defaultValue="Default sorting">
                  <Option value="0">Default sorting</Option>
                  <Option value="1">Sort by popularity</Option>
                  <Option value="2">Sort by averange rating</Option>
                  <Option value="3">Sort by laster</Option>
                  <Option value="4">Sort by price: low to high</Option>
                  <Option value="5">Sort by price: high to low</Option>
                </Select>
              </div>
              <div className="show-number-of-page">
                <Select defaultValue="16" onChange={handldeChangeSize}>
                  <Option value="16">Show 16</Option>
                  <Option value="32">Show 32</Option>
                  <Option value="48">Show 48</Option>
                  <Option value="All">Show All</Option>
                </Select>
              </div>
            </li>
            <li className="form-paginate">
              {currentPage === 1 ? (
                ""
              ) : (
                <ArrowLeftOutlined
                  style={{ marginRight: 10 }}
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
              )}
              <Input className="current-page" value={currentPage} /> of{" "}
              {lastPage}
              {currentPage === lastPage ? (
                ""
              ) : (
                <ArrowRightOutlined
                  style={{ marginLeft: 10 }}
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              )}
            </li>
          </ul>
        </div>
        <div className="shop-product">
          <Row>
            {currentProducts.map((product) => (
              <Col key={product._id} xs={12} sm={12} md={8} lg={6} xl={6}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="paginate-product-shop">
          <p className="show-number-of-results">
            Showing {indexOfFirstPost + 1}–{indexOfLastPost} of{" "}
            {products.length}
            results
          </p>
          <div className="paginate">
            <Pagination
              current={currentPage}
              total={products.length}
              onChange={paginate}
              showSizeChanger={false}
              pageSize={productsPerPage}
            />
          </div>
        </div>
      </div>
    </Spin>
  );
};
export default ProductShop;
