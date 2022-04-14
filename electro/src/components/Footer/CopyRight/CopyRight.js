import { Link } from "react-router-dom";
import "./CopyRight.scss";
const CopyRight = () => {
  return (
    <div id="CopyRight">
      <div className="container">
        <div className="copyright-left">
          © <Link to="/">Electro</Link> - All Rights Reserved
        </div>
        <div className="copyright-right">
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
