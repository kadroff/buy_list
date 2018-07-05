import React from 'react'
import ProductRow  from './ProductRow'


const ProductTable = ( { props } ) => {
    const rows = [];
    this.props.products.map((product) => {
      rows.push(
        <ProductRow
          product={product} 
          key={product.name} />
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

export default ProductTable;