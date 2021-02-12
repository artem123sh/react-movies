import reducers from './reducers';
import {
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_ERROR,
  GET_MOVIE_REQUEST_START,
} from './actionTypes';

describe('movie reducer', () => {
  const initialState = { movie: null, error: null };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_MOVIE_REQUEST_SUCCESS action', () => {
    expect(
      reducers(initialState, { type: GET_MOVIE_REQUEST_SUCCESS, payload: {} }),
    ).toEqual({ error: null, movie: {} });
  });

  it('should handle GET_MOVIE_REQUEST_ERROR action', () => {
    expect(
      reducers(initialState, { type: GET_MOVIE_REQUEST_ERROR, payload: { error: 'Error' } }),
    ).toEqual({ error: { error: 'Error' }, movie: null });
  });

  it('should handle GET_MOVIE_REQUEST_START action', () => {
    expect(
      reducers(initialState, { type: GET_MOVIE_REQUEST_START }),
    ).toEqual({ error: null, movie: null });
  });
});
