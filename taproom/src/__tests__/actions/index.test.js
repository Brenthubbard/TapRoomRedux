import * as actions from './../../actions';

describe('tapRoom actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name:'Kokanee', brand:'Super awesome', price: 5, alcoholContent: 15,  id: 1 })).toEqual({
      type:'ADD_KEG',
      names:'Kokanee',
      brand:'Super awesome',
      price: '5',
      alcoholContent: 15,
      id: 1
    });
  });
});