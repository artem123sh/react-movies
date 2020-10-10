import reducers from './reducers';
import {
  EDIT_MOVIE_REQUEST_START,
  EDIT_MOVIE_REQUEST_SUCCESS,
  EDIT_MOVIE_REQUEST_ERROR,
} from './actionTypes';

describe('editMovie reducer', () => {
  const initialState = { isLoaded: true, error: null };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle EDIT_MOVIE_REQUEST_SUCCESS action', () => {
    expect(
      reducers(initialState, { type: EDIT_MOVIE_REQUEST_SUCCESS }),
    ).toEqual({ error: null, isLoaded: true });
  });

  it('should handle EDIT_MOVIE_REQUEST_ERROR action', () => {
    expect(
      reducers(initialState, { type: EDIT_MOVIE_REQUEST_ERROR, payload: { error: 'Error' } }),
    ).toEqual({ error: { error: 'Error' }, isLoaded: true });
  });

  it('should handle EDIT_MOVIE_REQUEST_START action', () => {
    expect(
      reducers(initialState, { type: EDIT_MOVIE_REQUEST_START }),
    ).toEqual({ error: null, isLoaded: false });
  });
});
