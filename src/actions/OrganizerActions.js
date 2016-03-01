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

export function newOrganizer(name) {
  return {
    type: types.NEW_ORGANIZER,
    promise: axios.post(`/api/organizer`, name)
  }
}

export function deleteOrganizer(id) {
  return {
    type: types.DELETE_ORGANIZER,
    promise: axios.delete(`/api/organizer/${id}`)
  }
}

export function newSection(id, section) {
  return {
    type: types.NEW_SECTION,
    promise: axios.put(`/api/organizer/${id}`, section)
  }
}
