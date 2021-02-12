import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import {
  getMovie, getMovieRequestStart, getMovieRequestSuccess, getMovieRequestError,
} from './actions';
import {
  GET_MOVIE_REQUEST_START,
  GET_MOVIE_REQUEST_SUCCESS,
  GET_MOVIE_REQUEST_ERROR,
} from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getMovie actions', () => {
  it('should create getMovie action', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
    const expectedActions = [
      { type: GET_MOVIE_REQUEST_START },
      { type: GET_MOVIE_REQUEST_SUCCESS, payload: {} },
    ];
    const store = mockStore({ movies: { movies: [] } });
    await store.dispatch(getMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMovie action with cached movie', async () => {
    const expectedActions = [
      { type: GET_MOVIE_REQUEST_SUCCESS, payload: { id: 1 } },
    ];
    const store = mockStore({ movies: { movies: [{ id: 1 }] } });
    await store.dispatch(getMovie(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMovie action for failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const expectedActions = [
      { type: GET_MOVIE_REQUEST_START },
      { type: GET_MOVIE_REQUEST_ERROR, payload: { error: '' } },
    ];
    const store = mockStore({ movies: { movies: [] } });
    try {
      await store.dispatch(getMovie());
    } catch (e) {
      expect(e).toEqual(new Error());
    }
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMovieRequestSuccess action', () => {
    const expectedAction = {
      type: GET_MOVIE_REQUEST_SUCCESS,
    };
    expect(getMovieRequestSuccess()).toEqual(expectedAction);
  });

  it('should create getMovieRequestError action', () => {
    const expectedAction = {
      type: GET_MOVIE_REQUEST_ERROR,
      payload: { error: {} },
    };
    expect(getMovieRequestError({})).toEqual(expectedAction);
  });

  it('should create getMovieRequestStart action', () => {
    const expectedAction = {
      type: GET_MOVIE_REQUEST_START,
    };
    expect(getMovieRequestStart()).toEqual(expectedAction);
  });
});
