import 'babel/polyfill'; // import polyfil for ie browsers
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import createRoutes from './routes';
import config from './config';

const store = configureStore(window.__INITIAL_STATE__);
const routes = createRoutes(store);

const history = createBrowserHistory();

const mountNode = document.getElementById('app');

const component = (
  <Router history={history} routes={routes} onUpdate={logPageView} />
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  mountNode
);

if (__DEVELOPMENT__) {
  if (!mountNode || !mountNode.firstChild || !mountNode.firstChild.attributes || !mountNode.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__) {
  const DevTools = require('./containers/DevTools');
  ReactDOM.render(
    <Provider store={store}>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    mountNode
  );
}
