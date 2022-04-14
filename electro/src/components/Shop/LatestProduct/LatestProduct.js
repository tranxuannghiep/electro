import ProductRecommend from "../../Product/ProductRecommend/ProductRecommend";
import "./LatestProduct.scss";
const LatestProduct = ({ products }) => {
  return (
    <div id="LatestProduct">
      <div className="title">
        <h3>Latest Products</h3>
      </div>
      {products.map((product) => (
        <ProductRecommend key={product._id} product={product} />
      ))}
    </div>
  );
};
export default LatestProduct;
