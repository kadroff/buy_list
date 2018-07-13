import React from 'react'
import Product  from './Product'

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      totalSum: 0,
    };
  }

  componentDidMount() {
    this.calculateTotal();
  }

  onPlus() {
    this.setState({
      products: this.state.products.count++
    }) 
  }

  calculateTotal() {
    let total = 0;
    for (var i = 0; i<this.state.products.length; i++) {
      total += this.state.products[i].price * this.state.products[i].count;
    }

    this.setState({
      totalSum: total
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className="order">Order</th>
            <th className="edit">Edit Cart</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => 
            <Product name={product.name} price={product.price} count={product.count}/>
          )}
          <h1>{this.state.totalSum}</h1>
        </tbody>
      </table>
    );
  }
}

export default Cart;