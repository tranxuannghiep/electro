import { BarsOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./HomeNavigate.scss";
const HomeNavigate = () => {
  return (
    <div id="HomeNavigate">
      <div className="container">
        <div className="home-navigate">
          <div className="all-departments">
            <Link to="/">
              <BarsOutlined />
              All Departments
            </Link>
            <div className="departments-list">
              <ul>
                <li>
                  <Link to="/" className="text-bold">
                    Value of the Day
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-bold">
                    Top 100 Offers
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-bold">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    Computers & Accessories <RightOutlined />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="home-nav-second">
            <ul>
              <li>
                <Link to="/">
                  All Pages <DownOutlined />
                </Link>
              </li>
              <li>
                <Link to="/">Featured Brands</Link>
              </li>
              <li>
                <Link to="/">Trending Styles</Link>
              </li>
              <li>
                <Link to="/">Gift Cards</Link>
              </li>
              <li>
                <Link to="/">Free Shipping on Orders $50+</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeNavigate;
