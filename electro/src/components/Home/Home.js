import { Col, Row } from "antd";
import withLoading from "../../HOCs/withLoading";
import Compare from "../Compare/Compare";
import BestDeals from "./BestDeals/BestDeals";
import BestSellers from "./BestSellers/BestSellers";
import HomeAdv from "./HomeAdv/HomeAdv";
import HomeFeatured from "./HomeFeatured/HomeFeatured";
import HomeNavigate from "./HomeNavigate/HomeNavigate";
import HomeSlider from "./HomeSlider/HomeSlider";
import RecentlyAdded from "./RecentlyAdded/RecentlyAdded";
const Home = () => {
  return (
    <div id="Home">
      <HomeNavigate />
      <HomeSlider />
      <HomeAdv />
      <HomeFeatured />
      <BestDeals />
      <BestSellers />
      <div className="brand-home" style={{ marginBottom: 40 }}>
        <div className="container">
          <Row>
            <Col lg={24} xs={0} sm={0}>
              <div>
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/home-v5-banner.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <RecentlyAdded />
      <Compare />
    </div>
  );
};

export default withLoading(Home);
