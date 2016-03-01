import * as types from '../constants/actionTypes';

export const defaultState = {
  isLoading: false,
  isLoaded: false,
  isOrganzierLoading: false,
  isOrganizerLoaded: false,
  isCreatingOrganizer: false,
  organizers: [],
  new: undefined,
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

    case types.NEW_ORGANIZER_REQUEST:
      return {
        ...state,
        isCreatingOrganizer: true
      }

    case types.NEW_ORGANIZER:
      return {
        ...state,
        new: action.res.data._id,
        organizers: [
          ...state.organizers,
          action.res.data
        ]
      }

    case types.DELETE_ORGANIZER:
      return {
        ...state,
        organizers: [
            ...state.organizers.filter(organizer => organizer._id !== action.res.data._id)
        ]
      }

    case types.NEW_SECTION:
      return {
        ...state,
        organizer: action.res.data
      }

    case types.DELETE_SECTION:
      return {
        ...state,
        organizer: action.res.data
      }

    default:
      return state;
  }
}
