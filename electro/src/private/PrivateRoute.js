import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.userReducer.currentUser);
  const authing = useSelector((state) => state.userReducer.authing);
  return authing ? (
    <Loading />
  ) : user ? (
    children
  ) : (
    <Navigate to="/my-account" />
  );
};
export default PrivateRoute;
