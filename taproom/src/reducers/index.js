import formVisibleReducer from './form-visible-reducer';
import tapRoomReducer from './tapRoom-reducer';
import { combineReducers } from 'redux';
import rootReducer from './reducers/index';

// const store = createStore(rootReducer);
const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: tapRoomReducer
});

export default rootReducer;