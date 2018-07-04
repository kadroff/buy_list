import React from 'react'

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <ul className="product_list">
        <li>{product.name}</li>
        <li className='price'>{product.price}</li>
      </ul>
    )
  }
}

export default ProductRow;