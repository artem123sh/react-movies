import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import {
  addMovie, addMovieRequestStart, addMovieRequestSuccess, addMovieRequestError,
} from './actions';
import {
  ADD_MOVIE_REQUEST_START,
  ADD_MOVIE_REQUEST_SUCCESS,
  ADD_MOVIE_REQUEST_ERROR,
} from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('addMovie actions', () => {
  it('should create addMovie action', async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve());
    const expectedActions = [
      { type: ADD_MOVIE_REQUEST_START },
      { type: ADD_MOVIE_REQUEST_SUCCESS },
    ];
    const store = mockStore();
    await store.dispatch(addMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create addMovie action for failed response', async () => {
    axios.post.mockImplementationOnce(() => Promise.reject(new Error()));
    const expectedActions = [
      { type: ADD_MOVIE_REQUEST_START },
      { type: ADD_MOVIE_REQUEST_ERROR, payload: { error: '' } },
    ];
    const store = mockStore();
    try {
      await store.dispatch(addMovie());
    } catch (e) {
      expect(e).toEqual(new Error());
    }
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create addMovieRequestSuccess action', () => {
    const expectedAction = {
      type: ADD_MOVIE_REQUEST_SUCCESS,
    };
    expect(addMovieRequestSuccess()).toEqual(expectedAction);
  });

  it('should create addMovieRequestError action', () => {
    const expectedAction = {
      type: ADD_MOVIE_REQUEST_ERROR,
      payload: { error: {} },
    };
    expect(addMovieRequestError({})).toEqual(expectedAction);
  });

  it('should create addMovieRequestStart action', () => {
    const expectedAction = {
      type: ADD_MOVIE_REQUEST_START,
    };
    expect(addMovieRequestStart()).toEqual(expectedAction);
  });
});
