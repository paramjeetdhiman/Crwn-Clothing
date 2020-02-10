import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

// store is expecting from redux is array
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

/*****
 *
 *  Add middleware to store whenever gets action fired or dispatched we can catch them and display them.
 *  middleware is a function which receives actions in and do someting with them and pass to root reducer
 *
 *  Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.


 *
 */
