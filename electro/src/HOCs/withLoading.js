import { Spin } from "antd";
import { useState } from "react";

const withLoading = (OriginalComponent) => {
  const NewComponent = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return (
      <Spin spinning={loading}>
        <OriginalComponent />
      </Spin>
    );
  };
  return NewComponent;
};
export default withLoading;
