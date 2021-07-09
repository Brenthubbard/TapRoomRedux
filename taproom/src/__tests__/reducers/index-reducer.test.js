import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tapRoomReducer from '../../reducers/tapRoom-reducer';


let store = createStore(rootReducer);
describe("rootReducer", () => {
  
    test('Should return default state if no action type is recognized', () => {
      expect(rootReducer({}, { type: null })).toEqual({
        masterKegList: {},
        formVisibleOnPage: false
      });
    });
  

  test('Check that ADD_KEG action works for tapRoomReducer and root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      names: 'Kokanee',
      brand: 'Awesome',
      price: 12,
      alcoholContent:12,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(tapRoomReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });


  test('Check that initial state of tapRoomReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(tapRoomReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });


});