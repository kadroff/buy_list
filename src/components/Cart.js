import React from 'react';
import ProductContainer from '../containers/ProductContainer';
import { REDUCE_PRODUCT_COUNT, ADD_PRODUCT_COUNT } from '../constants/constants';

const Cart = ( { products, totalSum } ) => {
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th className="order">Order</th>
            <th className="edit">Edit Cart</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) =>
            <ProductContainer
              index = {index}
              name = {product.name}
              price = {product.price}
              count = {product.count}
              key = {index}
            />
            )}
        </tbody>
      </table>
      <h1>{totalSum}</h1>
    </div>
  );
}
  
export default Cart;