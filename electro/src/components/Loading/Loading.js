import { Spin } from "antd";
import "./Loading.scss";

const Loading = () => {
  return (
    <div id="Loading">
      <Spin tip="Loading..."></Spin>,
    </div>
  );
};
export default Loading;
