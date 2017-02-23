import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import searchReducer from '../reducers/search_reducer';

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => (
  createStore(
    searchReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore;
