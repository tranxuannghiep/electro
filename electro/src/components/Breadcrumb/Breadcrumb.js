import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import "./Breadcrumb.scss";
const BreadcrumbComponent = (props) => {
  const navigate = useNavigate();
  const handleClick = (crumb) => {
    const newCrumb = crumb.target.innerText.toLowerCase().split(" ").join("-");
    if (newCrumb === "home") navigate("/");
    else {
      navigate(`/${newCrumb}`);
    }
  };
  return (
    <Breadcrumb separator=">" id="Breadcrumb">
      {props.crumbs.map((crumb, index) => {
        if (index !== props.crumbs.length - 1) {
          return (
            <Breadcrumb.Item
              key={crumb}
              onClick={(crumb) => handleClick(crumb)}
            >
              {crumb}
            </Breadcrumb.Item>
          );
        } else {
          return <Breadcrumb.Item key={crumb}>{crumb}</Breadcrumb.Item>;
        }
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
