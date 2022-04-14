import HeaderComponent from "./HeaderComponent/HeaderComponent";
import TopBar from "./TopBar/TopBar";
import "./Header.scss";
const Header = () => {
  return (
    <div id="Header">
      <TopBar />
      <HeaderComponent />
    </div>
  );
};

export default Header;
