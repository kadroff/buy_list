import React from 'react'
import ProductRow  from './ProductRow'

class ProductTable extends React.Component {
  render() {
    const rows = [];
    this.props.products.forEach((product) => {
      rows.push(
        <ProductRow
          product={product} />
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PRODUCTS = [
  {name: 'Item 1', price: '$20.00'},
  {name: 'Item 2', price: '$6.00'},
  {name: 'Item 3', price: '$49.00'},
  {name: 'Item 4', price: '$15.00'},
];

export default ProductRow;