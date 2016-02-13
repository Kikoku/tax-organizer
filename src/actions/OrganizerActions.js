import * as types from '../constants/actionTypes';

import axios from 'axios';

export function getOrganizers() {
  return {
    type: types.GET_ORGANIZERS,
    promise: axios.get(`/api/organizer`)
  }
}

export function getOrganizerById(id) {
  return {
    type: types.GET_ORGANIZER_BY_ID,
    promise: axios.get(`/api/organizer/${id}`)
  }
}
