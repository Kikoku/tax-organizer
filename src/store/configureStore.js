import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/promiseMiddleware';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

  const middleware = [
    thunk,
    promiseMiddleware
  ];

  if(__DEVELOPMENT__ && __CLIENT__) {
    middleware.push(loggerMiddleware({
      collapsed: true
    }));
  }

  let finalCreateStore;

  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {

    const {persistState} = require('redux-devtools');
    const DevTools = require('../containers/DevTools');

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);

  } else {

    finalCreateStore = applyMiddleware(...middleware)(createStore);

  }


  if (__DEVELOPMENT__ && module.hot) {

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
