import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PRODUCTS from './constants/Products'

ReactDOM.render(<App products={PRODUCTS} />, document.getElementById('root'));

registerServiceWorker();
