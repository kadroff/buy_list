import React from 'react'

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.countAdd = this.countAdd.bind(this);
    this.countReduce = this.countReduce.bind(this);
  }
  
  countAdd() {
    this.setState({
      count: this.state.count + 1
    })
  }

  countReduce() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
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
        <li className='price'>{product.price}</li>
      </ul>
    )
  }
}

export default ProductRow;