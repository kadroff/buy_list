import { connect } from 'react-redux';
import Product from '../components/Product';
import { changeProductCount } from '../actions';

const mapDispatchToProps = dispatch => ({
  changeProductCount: ( index, changeCount ) => dispatch(changeProductCount( index, changeCount ))
})

const ProductContainer = connect(
  null,
  mapDispatchToProps
)(Product)

export default ProductContainer