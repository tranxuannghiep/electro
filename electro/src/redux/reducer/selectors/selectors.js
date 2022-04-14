import { createSelector } from "reselect";

export const productsSelector = (state) => state.productReducer.products;
export const keywordSelector = (state) => state.filterReducer.search;
export const price_min = (state) => state.filterReducer.price_min;
export const price_max = (state) => state.filterReducer.price_max;
export const category = (state) => state.filterReducer.categoryId;
export const categories = (state) => state.categoryReducer.categories;

const checkCategory = (product, id) => {
  const idxCategory = product.category.findIndex((val) => val._id === id);
  const idxParentCcategory = product.parent_category.findIndex(
    (val) => val._id === id
  );
  return idxCategory !== -1 || idxParentCcategory !== -1;
};

const getNameCate = (id) => {
  const idx1 = categories.findIndex((val) => val._id === id);
  const idx2 = categories.findIndex((cate) => {
    let check = false;
    for (let i = 0; i < cate.sub_categories.length; i++) {
      if (cate.sub_categories[i]._id === id) check = true;
    }
    return check;
  });
  if (idx1 !== -1) return idx1;
  if (idx2 !== -1) return idx2;
  return -1;
};

export const productsRemainingSelector = createSelector(
  productsSelector,
  keywordSelector,
  price_min,
  price_max,
  category,
  (products, keyword, price_min, price_max, category) => {
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
  }
);
