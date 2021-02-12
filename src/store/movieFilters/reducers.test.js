import reducers from './reducers';
import { SET_GENRE_FILTER } from './actionTypes';

describe('movieFilters reducer', () => {
  const initialState = { filter: '' };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_GENRE_FILTER action', () => {
    expect(
      reducers(initialState, { type: SET_GENRE_FILTER, payload: { filter: 'test' } }),
    ).toEqual({ filter: 'test' });
  });
});
