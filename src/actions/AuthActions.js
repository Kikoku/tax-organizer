import * as types from '../constants/actionTypes';

import axios from 'axios';

export function signup(user) {
  return {
    type: types.SIGNUP,
    promise: axios.post(`/api/auth/signup`, user)
  }
}

export function login(user) {
  return {
    type: types.LOGIN,
    promise: axios.post(`/api/auth/login`, user)
  }
}

export function authWithToken(token) {
  return {
    type: types.AUTH_WITH_TOKEN,
    promise: axios.post(`/api/auth/jwt`, {token})
  }
}

export function logout() {
  return {
    type: types.LOGOUT
  }
}
