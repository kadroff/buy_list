import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProductTable from './components/ProductTable'

class App extends Component {
  render () {
    return (
      <ProductTable products={this.props.products}   />
    );

  }
} 

export default App;

