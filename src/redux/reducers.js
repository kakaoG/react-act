import {combineReducers} from "redux";
import userInfo from './reducers/userInfo';
import act from './reducers/act';

export default combineReducers({
  userInfo,
  act
})