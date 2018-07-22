import { ADD_PRODUCT_COUNT, REDUCE_PRODUCT_COUNT } from './constants/constants';
import {
  LOAD_PRODUCTS,
  CHANGE_PRODUCT_COUNT,
} from './actions'

function todoApp(state = { products: [] }, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products
      })
    case CHANGE_PRODUCT_COUNT:
      const products = state.products;
      if (action.changeCount === ADD_PRODUCT_COUNT ) {
        products[action.index].count += 1;
      } else if (action.changeCount === REDUCE_PRODUCT_COUNT) {
        products[action.index].count -= 1;
      }

      return Object.assign({}, state, {
        products: products
      });
    default:
      return state
  }
}

export default todoApp;