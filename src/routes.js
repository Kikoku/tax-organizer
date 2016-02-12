// React import is required else Router crashes
import React from 'react';
import {Router, Route, IndexRoute, Redirect} from 'react-router';

import App from './containers/App';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

export default function createRoutes(store) {

  function requireAuth(nextState, replaceState) {

    const state = store.getState();

    if(!state.auth.isLoggedIn) {
      replaceState({
        nextPathname: nextState.location.pathname
      }, '/login', {
        next: nextState.location.pathname
      });
    }
  }

  return (
    <Route path="/" component={App}>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </Route>
  );
}
