import { combineReducers } from 'redux';
import trailssReducer from './trailsReducer';

export default combineReducers({
  trails: trailsReducer
});
