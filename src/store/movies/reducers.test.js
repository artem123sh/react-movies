import reducers from './reducers';
import {
  GET_MOVIES_REQUEST_START,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
} from './actionTypes';

describe('movies reducer', () => {
  const initialState = {
    movies: [],
    offset: 0,
    totalAmount: 0,
    error: null,
  };

  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_MOVIES_REQUEST_SUCCESS action', () => {
    expect(
      reducers(initialState, {
        type: GET_MOVIES_REQUEST_SUCCESS,
        payload: {
          movies: [],
          offset: 0,
          totalAmount: 0,
        },
      }),
    ).toEqual({
      error: null,
      movies: [],
      offset: 0,
      totalAmount: 0,
    });
  });

  it('should handle GET_MOVIES_REQUEST_ERROR action', () => {
    expect(
      reducers(initialState, { type: GET_MOVIES_REQUEST_ERROR, payload: { error: 'Error' } }),
    ).toEqual({
      error: { error: 'Error' },
      movies: [],
      offset: 0,
      totalAmount: 0,
    });
  });

  it('should handle GET_MOVIES_REQUEST_START action', () => {
    expect(
      reducers(initialState, { type: GET_MOVIES_REQUEST_START }),
    ).toEqual({
      error: null,
      movies: [],
      offset: 0,
      totalAmount: 0,
    });
  });
});
