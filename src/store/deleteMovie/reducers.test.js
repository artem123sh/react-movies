import reducers from './reducers';
import { DELETE_MOVIE_REQUEST_START, DELETE_MOVIE_REQUEST_SUCCESS, DELETE_MOVIE_REQUEST_ERROR } from './actionTypes';

describe('deleteMovie reducer', () => {
  const initialState = { isLoaded: true, error: null };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_MOVIE_REQUEST_SUCCESS action', () => {
    expect(
      reducers(initialState, { type: DELETE_MOVIE_REQUEST_SUCCESS }),
    ).toEqual({ error: null, isLoaded: true });
  });

  it('should handle DELETE_MOVIE_REQUEST_ERROR action', () => {
    expect(
      reducers(initialState, { type: DELETE_MOVIE_REQUEST_ERROR, payload: { error: 'Error' } }),
    ).toEqual({ error: { error: 'Error' }, isLoaded: true });
  });

  it('should handle DELETE_MOVIE_REQUEST_START action', () => {
    expect(
      reducers(initialState, { type: DELETE_MOVIE_REQUEST_START }),
    ).toEqual({ error: null, isLoaded: false });
  });
});
