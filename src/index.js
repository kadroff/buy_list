import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './components/Cart';
import registerServiceWorker from './registerServiceWorker';
import PRODUCTS from './constants/Products'

ReactDOM.render(<Cart products={PRODUCTS} />, document.getElementById('root'));

registerServiceWorker();
