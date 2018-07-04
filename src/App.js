import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProductTable from './components/ProductTable'

class App extends Component {
  render () {
    return (
      <div>
         <ProductTable products={this.props.products} />
      </div>
    );

  }
} 

export default App;

