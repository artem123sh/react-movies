import reducers from './reducers';
import {
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './actionTypes';

describe('moviesSorting reducer', () => {
  const initialState = { sortBy: 'release_date', sortOrder: 'desc' };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_SORT_BY action', () => {
    expect(
      reducers(initialState, { type: SET_SORT_BY, payload: { sortBy: '' } }),
    ).toEqual({ sortBy: '', sortOrder: 'desc' });
  });

  it('should handle SET_SORT_BY action', () => {
    expect(
      reducers(initialState, { type: SET_SORT_ORDER, payload: { sortOrder: '' } }),
    ).toEqual({ sortBy: 'release_date', sortOrder: '' });
  });
});
