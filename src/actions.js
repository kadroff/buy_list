// LOADPRODUCTS, ADDCOUNT, REDUCECOUNT
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export function fetchproducts(products) {
  return {
    type: LOAD_PRODUCTS,
    products
  };
} 
