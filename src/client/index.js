import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';

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
