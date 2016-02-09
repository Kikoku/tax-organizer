import * as types from '../constants/actionTypes';

export const defaultState = {
  token: null,
  user: null,
  error: null,
  isSigningUp: false,
  isLoading: false
};

export default function auth(state = defaultState, action) {

  switch(action.type) {

    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true
      }

    case types.SIGNUP:
      return {
        ...state,
        isSigningUp: false,
        isLoggedIn: true,
        user: action.res.data.user,
        token: action.res.data.token
      }

    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        error: action.error.data.message
      }

    default:
      return state;
  }
}
