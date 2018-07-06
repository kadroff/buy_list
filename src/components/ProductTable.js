import React from 'react'
import ProductRow  from './ProductRow'

const ProductTable = (props) => {
    const rows = [];
    props.products.map(product => {
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
            <th className="order">Order</th>
            <th className="edit">Edit Cart</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

export default ProductTable;