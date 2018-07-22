import React from 'react';
import { ADD_PRODUCT_COUNT, REDUCE_PRODUCT_COUNT } from '../constants/constants';

const Product = ( { index, name, price, count,  changeProductCount } ) => {
  return (
    <div>
      <ul className="product_list">
        <li className="product_name">{name}</li>
        <li className="counter"> 
          <input onClick={() => changeProductCount( index, REDUCE_PRODUCT_COUNT )} type="button" value="-" />
          <p>{count}</p>
          <input onClick={() => changeProductCount( index, ADD_PRODUCT_COUNT )} type="button" value="+" />
        </li>
        <li className='price'>${price}</li>
      </ul>
    </div>
  );
}

export default Product;