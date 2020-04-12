import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const run = () => ReactDOM.render(<App />, document.getElementById('root'));

if (document.readyState !== 'loading') run();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
else {
  document.attachEvent('onreadystatechange', () => {
    if (document.readyState === 'complete') run();
  });
}
