import { Switch } from "antd";

const Theme = () => {
  const handleChangeTheme = (value) => {
    if (value) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <Switch
      onClick={handleChangeTheme}
      style={{
        position: "fixed",
        top: "50%",
        transform: "rotate(-90deg)",
      }}
      checkedChildren="Light"
      unCheckedChildren="Dark"
    />
  );
};
export default Theme;
