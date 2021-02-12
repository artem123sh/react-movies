import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import {
  getMovies, getMoviesRequestStart, getMoviesRequestSuccess, getMoviesRequestError,
} from './actions';
import {
  GET_MOVIES_REQUEST_START,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
} from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getMovies actions', () => {
  it('should create getMovies action', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
    const expectedActions = [
      { type: GET_MOVIES_REQUEST_START },
      { type: GET_MOVIES_REQUEST_SUCCESS, payload: {} },
    ];
    const store = mockStore();
    await store.dispatch(getMovies({}));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMovies action', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));
    const expectedActions = [
      { type: GET_MOVIES_REQUEST_START },
      { type: GET_MOVIES_REQUEST_SUCCESS, payload: {} },
    ];
    const store = mockStore();
    await store.dispatch(getMovies({ search: 'test' }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMovies action for failed response', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    const expectedActions = [
      { type: GET_MOVIES_REQUEST_START },
      { type: GET_MOVIES_REQUEST_ERROR, payload: { error: '' } },
    ];
    const store = mockStore({ movies: { movies: [] } });
    try {
      await store.dispatch(getMovies({}));
    } catch (e) {
      expect(e).toEqual(new Error());
    }
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create getMoviesRequestSuccess action', () => {
    const expectedAction = {
      type: GET_MOVIES_REQUEST_SUCCESS,
    };
    expect(getMoviesRequestSuccess()).toEqual(expectedAction);
  });

  it('should create getMoviesRequestError action', () => {
    const expectedAction = {
      type: GET_MOVIES_REQUEST_ERROR,
      payload: { error: {} },
    };
    expect(getMoviesRequestError({})).toEqual(expectedAction);
  });

  it('should create getMoviesRequestStart action', () => {
    const expectedAction = {
      type: GET_MOVIES_REQUEST_START,
    };
    expect(getMoviesRequestStart()).toEqual(expectedAction);
  });
});
