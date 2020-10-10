import reducers from './reducers';
import { ADD_MOVIE_REQUEST_START, ADD_MOVIE_REQUEST_SUCCESS, ADD_MOVIE_REQUEST_ERROR } from './actionTypes';

describe('addMovie reducer', () => {
  const initialState = { isLoaded: true, error: null };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_MOVIE_REQUEST_SUCCESS action', () => {
    expect(
      reducers(initialState, { type: ADD_MOVIE_REQUEST_SUCCESS }),
    ).toEqual({ error: null, isLoaded: true });
  });

  it('should handle ADD_MOVIE_REQUEST_ERROR action', () => {
    expect(
      reducers(initialState, { type: ADD_MOVIE_REQUEST_ERROR, payload: { error: 'Error' } }),
    ).toEqual({ error: { error: 'Error' }, isLoaded: true });
  });

  it('should handle ADD_MOVIE_REQUEST_START action', () => {
    expect(
      reducers(initialState, { type: ADD_MOVIE_REQUEST_START }),
    ).toEqual({ error: null, isLoaded: false });
  });
});
