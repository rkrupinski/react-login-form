import { combineReducers } from 'redux';
import authenticated from './authenticated';
import error from './error';

export default combineReducers({
  authenticated,
  error,
});
