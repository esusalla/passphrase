import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import socket from './socket';
import App from './containers/App';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(socket)));

const run = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

if (document.readyState !== 'loading') run();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
else {
  document.attachEvent('onreadystatechange', () => {
    if (document.readyState === 'complete') run();
  });
}
