import tapRoomReducer from '../../reducers/tapRoom-reducer';


describe('tapRoom-reducer', () => {

  let action;
  const kegData = {
    1: {
      name: 'Kokanee',
      brand: 'Super awesome',
      price: 5,
      alcoholContent: 15,
      id: 1
    },
    2: {
      name: 'Kokanee Gold',
      brand: 'WOW! awesome',
      price: 12,
      alcoholContent: 35,
      id: 2
    }
  };

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(tapRoomReducer({}, { type: null })).toEqual({});
  });



  test('Should successfully add new keg data to KegList', () => {

    const { name, brand, price, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    expect(tapRoomReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });


  
  test('Should successfully delete a Keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(tapRoomReducer(currentState, action)).toEqual({
      2: {
        name: 'Kokanee Gold',
        brand: 'WOW! awesome',
        price: 12,
        alcoholContent: 35,
        id: 2
      }
    });
  });

});