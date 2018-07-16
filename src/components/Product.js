import React from 'react';

const Product = ( { name, count, price, onMinus, onPlus} ) => {
  return (
    <div>
      <ul className="product_list">
        <li className="product_name">{name}</li>
        <li className="counter"> 
          <input onClick={onMinus} type="button" value="-" />
          <p>{count}</p>
          <input onClick={onPlus} type="button" value="+" />
        </li>
        <li className='price'>${price * count}</li>
      </ul>
    </div>
  );
}


export default Product;