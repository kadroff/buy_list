import React from 'react'

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      price: this.props.product.price
    };

    this.countAdd = this.countAdd.bind(this);
    this.countReduce = this.countReduce.bind(this);
  }
  countAdd() {
    var firstPrice = parseInt(this.props.product.price);
    var new_price = parseInt(this.state.price) + firstPrice;
    this.setState({
      count: this.state.count + 1,
      price: new_price
    })
    console.log(this.props.product.price);
  }

  countReduce() {
    if (this.state.count > 0) {
      var firstPrice = parseInt(this.props.product.price);
      var new_price = parseInt(this.state.price) - firstPrice;
      this.setState({
        count: this.state.count - 1,
        price: new_price
      })
    }
  }

  render() {
    const product = this.props.product;
    return (
      <ul className="product_list">
        <li className="product_name">{product.name}</li>
        <li className="counter"> 
          <input onClick={this.countReduce} type="button" value="-" />
          <p>{this.state.count}</p>
          <input onClick={this.countAdd} type="button" value="+" />
        </li>
        <li className='price'>${this.state.price}</li>
      </ul>
    )
  }
}

export default ProductRow;