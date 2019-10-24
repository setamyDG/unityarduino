import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import isVisibleReducer from './isVisible';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  isVisible: isVisibleReducer,
});

export default allReducers;
