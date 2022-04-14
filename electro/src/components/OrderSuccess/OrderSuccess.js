import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import withLoading from "../../HOCs/withLoading";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import "./OrderSuccess.scss";
const crumbs = ["Home", "Checkout", "Order Success"];
const OrderSuccess = () => {
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const carts = useSelector((state) => state.orderReducer.carts);

  useEffect(() => {
    const today = new Date();
    const time =
      today.getFullYear() + "/" + today.getMonth() + "/" + today.getDay();
    const datenow = new Date(time);
    setDate(datenow.toString().slice(4, 15));
  }, []);
  useEffect(() => {
    if (carts.length) setShow(true);
    else {
      setShow(false);
    }
  }, [carts]);
  return (
    <div id="OrderSuccess">
      <div className="container">
        <BreadcrumbComponent crumbs={crumbs} />
        {!show ? (
          <h2 className="title">No Product</h2>
        ) : (
          <div>
            <h2 className="title">Order received</h2>
            <div className="order-success">
              <p>Thank you. Your order has been received.</p>
              <ul>
                <li>
                  Date: <span>{date}</span>
                </li>
                <li>
                  Total:{" "}
                  <span>
                    {" "}
                    ${" "}
                    {carts.reduce(
                      (acc, val) => acc + val.quantity * val.promotion_price,
                      0
                    ) + 50}
                  </span>
                </li>
                <li>
                  Payment method: <span> Direct bank transfer</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default withLoading(OrderSuccess);
