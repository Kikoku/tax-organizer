import {combineReducers} from 'redux';
import auth from './auth';
import organizers from './organizers'

const rootReducer = combineReducers({
  auth,
  organizers
});

export default rootReducer;
