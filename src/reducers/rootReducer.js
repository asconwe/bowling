import {combineReducers} from 'redux';
import bowling from './bowlingReducer';

const rootReducer = combineReducers({
  bowling
});

export default rootReducer;