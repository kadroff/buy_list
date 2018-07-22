// LOADPRODUCTS, ADDCOUNT, REDUCECOUNT
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT';

export function fetchproducts(products) {
  return {
    type: LOAD_PRODUCTS,
    products
  };
} 

export function changeProductCount(index, changeCount) {
  return {
    type: CHANGE_PRODUCT_COUNT,
    index, 
    changeCount
  };
}