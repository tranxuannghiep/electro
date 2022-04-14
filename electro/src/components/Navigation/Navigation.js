import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [cate, setCate] = useState([]);
  useEffect(() => {
    const newCate = categories.filter(
      (cate) => cate.sub_categories.length === 0
    );
    setCate(newCate);
  }, [categories]);

  const handleNaviHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleNaviCategory = (e, id) => {
    e.preventDefault();

    navigate(`/shop?categoryId=${id}`);
  };
  return (
    <div id="Navigation">
      <div className="container">
        <ul className="menu-navbar">
          <li className="menu-navbar-item">
            <a href="/" onClick={handleNaviHome}>
              Home
            </a>
          </li>
          {cate.map((val) => (
            <li key={val._id} className="menu-navbar-item">
              <a
                href={`/shop/?categoryId=${val._id}`}
                onClick={(e) => handleNaviCategory(e, val._id)}
              >
                {val.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
