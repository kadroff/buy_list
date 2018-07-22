import {
  LOAD_PRODUCTS,
} from './actions'

function todoApp(state = { products: [] }, action) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return Object.assign({}, state, {
        products: action.products
      })
    default:
      return state
  }
}

export default todoApp;