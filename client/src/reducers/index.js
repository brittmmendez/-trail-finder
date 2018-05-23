import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';

export default combineReducers({
  trails: trailsReducer
});
