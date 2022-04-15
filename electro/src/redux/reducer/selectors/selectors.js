import { createSelector } from "reselect";

export const productsSelector = (state) => state.productReducer.products;
export const keywordSelector = (state) => state.filterReducer.search;
export const price_min = (state) => state.filterReducer.price_min;
export const price_max = (state) => state.filterReducer.price_max;
export const category = (state) => state.filterReducer.categoryId;
export const orderby = (state) => state.filterReducer.orderby;
export const categories = (state) => state.categoryReducer.categories;

const checkCategory = (product, id) => {
  const idxCategory = product.category.findIndex((val) => val._id === id);
  const idxParentCcategory = product.parent_category.findIndex(
    (val) => val._id === id
  );
  return idxCategory !== -1 || idxParentCcategory !== -1;
};

export const productsRemainingSelector = createSelector(
  productsSelector,
  keywordSelector,
  price_min,
  price_max,
  category,
  orderby,
  (products, keyword, price_min, price_max, category, orderby) => {
    if (orderby === "default") {
      return products.filter((product) => {
        if (category !== "") {
          return (
            product.name.toLowerCase().includes(keyword.toLowerCase()) &&
            product.promotion_price >= price_min &&
            product.promotion_price <= price_max &&
            checkCategory(product, category)
          );
        } else {
          return (
            product.name.toLowerCase().includes(keyword.toLowerCase()) &&
            product.promotion_price >= price_min &&
            product.promotion_price <= price_max
          );
        }
      });
    } else if (orderby === "price") {
      return products
        .filter((product) => {
          if (category !== "") {
            return (
              product.name.toLowerCase().includes(keyword.toLowerCase()) &&
              product.promotion_price >= price_min &&
              product.promotion_price <= price_max &&
              checkCategory(product, category)
            );
          } else {
            return (
              product.name.toLowerCase().includes(keyword.toLowerCase()) &&
              product.promotion_price >= price_min &&
              product.promotion_price <= price_max
            );
          }
        })
        .sort((a, b) => a.promotion_price - b.promotion_price);
    } else if (orderby === "price-desc") {
      return products
        .filter((product) => {
          if (category !== "") {
            return (
              product.name.toLowerCase().includes(keyword.toLowerCase()) &&
              product.promotion_price >= price_min &&
              product.promotion_price <= price_max &&
              checkCategory(product, category)
            );
          } else {
            return (
              product.name.toLowerCase().includes(keyword.toLowerCase()) &&
              product.promotion_price >= price_min &&
              product.promotion_price <= price_max
            );
          }
        })
        .sort((a, b) => b.promotion_price - a.promotion_price);
    }
  }
);
