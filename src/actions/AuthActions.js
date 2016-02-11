import * as types from '../constants/actionTypes';

import axios from 'axios';

export function signup(user) {
  return {
    type: types.SIGNUP,
    promise: axios.post(`/api/auth/signup`, user)
  }
}
