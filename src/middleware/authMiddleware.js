import {
  LOGIN,
  LOGOUT,
  SIGNUP
} from '../constants/actionTypes';

export default function authMiddleware() {
  return next => action => {
    const {type} = action;

    if(__CLIENT__) {

      if(type === LOGIN || type === SIGNUP) {
        window.localStorage.setItem('jwt', action.res.data.token);
      }

      if(type === LOGOUT) {
        window.localStorage.removeItem('jwt');
      }
    }

    next(action);
  }
}
