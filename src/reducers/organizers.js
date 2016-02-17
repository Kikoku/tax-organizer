import * as types from '../constants/actionTypes';

export const defaultState = {
  isLoading: false,
  isLoaded: false,
  isOrganzierLoading: false,
  isOrganizerLoaded: false,
  organizers: [],
  organizer: {
    _id: '',
    sections: [{
      questions: [{
        options: [{

        }]
      }]
    }]
  }
};

export default function organzier(state = defaultState, action) {

  switch(action.type) {

    case types.GET_ORGANIZERS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        organizers: action.res.data
      }

    case types.GET_ORGANIZER_BY_ID:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        organizer: action.res.data
      }

    default:
      return state;
  }
}
