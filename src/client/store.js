import { applyMiddleware, compose, createStore } from 'redux';

import middleware from './middleware';
import reducers from './reducers';

const enhancers = compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, enhancers);

export default store;
