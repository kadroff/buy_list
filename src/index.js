import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CartContainer from './containers/CartContainer';
import registerServiceWorker from './registerServiceWorker';
import PRODUCTS from './constants/Products'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import { fetchproducts } from './actions'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(fetchproducts(PRODUCTS));

ReactDOM.render(<Provider store={store} >
                  <CartContainer />
                </Provider>, 
                document.getElementById('root')
              );

registerServiceWorker();
