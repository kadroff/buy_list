import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);

    this.countAdd = this.countAdd.bind(this);
    this.countReduce = this.countReduce.bind(this);
  }
  countAdd() {
      this.props.onPlus()
  }

  countReduce() {
    this.props.onMinus()
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <ul className="product_list">
          <li className="product_name">{this.props.name}</li>
          <li className="counter"> 
            <input onClick={this.countReduce} type="button" value="-" />
            <p>{this.props.count}</p>
            <input onClick={this.countAdd} type="button" value="+" />
          </li>
          <li className='price'>${this.props.price}</li>
        </ul>
      </div>
    )
  }
}


export default ProductRow;