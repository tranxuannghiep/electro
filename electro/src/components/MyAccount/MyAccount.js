import { Row } from "antd";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import Loading from "../Loading/Loading";
import Login from "./Login/Login";
import "./MyAccount.scss";
import Register from "./Register/Register";
const crumbs = ["Home", "My Account"];
const MyAccount = () => {
  const user = useSelector((state) => state.userReducer.currentUser);
  const authing = useSelector((state) => state.userReducer.authing);

  return (
    <>
      {authing ? (
        <Loading />
      ) : user ? (
        <Navigate to="/" />
      ) : (
        <>
          <div className="container">
            <BreadcrumbComponent crumbs={crumbs} />
          </div>
          <div id="MyAccount">
            <div className="container">
              <div className="login-rgister">
                <span className="or-text">or</span>
                <Row gutter={170}>
                  <Login />
                  <Register />
                </Row>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyAccount;
