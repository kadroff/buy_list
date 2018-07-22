import { connect } from 'react-redux';
import Cart from '../components/Cart';

function calculateTotal(products) {
  let total = 0;
  for (var i = 0; i < products.length; i++) {
    total += products[i].price * products[i].count;
  }
  return total;
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    totalSum: calculateTotal(state.products)
  }
}

const CartContainer = connect(
  mapStateToProps
)(Cart)

export default CartContainer