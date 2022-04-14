import { Menu } from "antd";
import { useSelector } from "react-redux";
import { useQuery } from "../../../hooks/useQuery";

import "./SideBar.scss";
const SideBar = () => {
  const { SubMenu } = Menu;
  const categories = useSelector((state) => state.categoryReducer.categories);
  const categoryid = useSelector((state) => state.filterReducer.categoryId);
  const [query, setQuery] = useQuery();
  const handleFilterByCategory = (id) => {
    setQuery({ ...query, categoryId: id });
  };
  const handleShowAllCategories = () => {
    if (categoryid.length) {
      delete query.categoryId;
      setQuery({ ...query });
    }
  };
  return (
    <div id="SideBar">
      <div className="sidebar-menu">
        <h3 className="title" onClick={handleShowAllCategories}>
          {categoryid.length ? "Show All Categories" : "Browse Categories"}
        </h3>
        <Menu mode="inline">
          {categories.map((category) => {
            return category.sub_categories.length ? (
              <SubMenu
                key={category._id}
                title={
                  <>
                    {category.name}{" "}
                    <span className="amount">
                      {" "}
                      (
                      {category.sub_categories.reduce(
                        (acc, val) => acc + val.total,
                        0
                      )}
                      )
                    </span>
                  </>
                }
              >
                {category.sub_categories.map((val) => (
                  <Menu.Item
                    key={val._id}
                    onClick={() => handleFilterByCategory(val._id)}
                  >
                    {val.sub_name}{" "}
                    <span className="amount">{`(${val.total})`}</span>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={category._id}
                onClick={() => handleFilterByCategory(category._id)}
              >
                {category.name}{" "}
                <span className="amount">{`(${category.total})`}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};
export default SideBar;
