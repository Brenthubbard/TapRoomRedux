import tapRoom-reducer from '../../reducers/tapRoom-reducer';

describe('tapRoom-reducer', () => {
  test('should returdefault state if there is no action type passed into the reducer', () => {
    expect(tapRoom - reducer({}, { type: null })).toEqual({});
  });
});