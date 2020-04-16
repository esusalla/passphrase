import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import socket from './socket';
import App from './components/App';

import reducers from './reducers';

const enhancers = compose(applyMiddleware(socket), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, enhancers);

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
