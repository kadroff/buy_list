import React from 'react';
import Product  from './Product';

class Cart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      totalSum: 0
    };
  }

  componentDidMount() {
    this.calculateTotal();
  }

  onPlus(index) {
    const products = this.state.products;
    products[index].count += 1;
    this.setState({
      products: products
    })
    this.calculateTotal();
  }

  onMinus(index) {
    const products = this.state.products;
    if (products[index].count > 1) {
      products[index].count -= 1;
    }
    this.setState({
      products: products
    })
    this.calculateTotal();
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
      <div className="cart">
        <table>
          <thead>
            <tr>
              <th className="order">Order</th>
              <th className="edit">Edit Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, index) =>
              <Product onPlus={() => this.onPlus(index)}
                       onMinus={() => this.onMinus(index)}
                       name={product.name}
                       price={product.price}
                       count={product.count}
                       key={index}
              />
            )}
          </tbody>
        </table>
        <h1>{this.state.totalSum}</h1>
      </div>
    );
  }
}

export default Cart;