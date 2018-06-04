import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  trails: trailsReducer,
  comments: commentsReducer
});
