import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import {
  deleteMovie, deleteMovieRequestStart, deleteMovieRequestSuccess, deleteMovieRequestError,
} from './actions';
import {
  DELETE_MOVIE_REQUEST_SUCCESS,
  DELETE_MOVIE_REQUEST_START,
  DELETE_MOVIE_REQUEST_ERROR,
} from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('deleteMovie actions', () => {
  it('should create addMovie action', async () => {
    axios.delete.mockImplementationOnce(() => Promise.resolve());
    const expectedActions = [
      { type: DELETE_MOVIE_REQUEST_START },
      { type: DELETE_MOVIE_REQUEST_SUCCESS },
    ];
    const store = mockStore();
    await store.dispatch(deleteMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create addMovie action for failed response', async () => {
    axios.delete.mockImplementationOnce(() => Promise.reject(new Error()));
    const expectedActions = [
      { type: DELETE_MOVIE_REQUEST_START },
      { type: DELETE_MOVIE_REQUEST_ERROR, payload: { error: '' } },
    ];
    const store = mockStore();
    try {
      await store.dispatch(deleteMovie());
    } catch (e) {
      expect(e).toEqual(new Error());
    }
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create deleteMovieRequestSuccess action', () => {
    const expectedAction = {
      type: DELETE_MOVIE_REQUEST_SUCCESS,
    };
    expect(deleteMovieRequestSuccess()).toEqual(expectedAction);
  });

  it('should create deleteMovieRequestError action', () => {
    const expectedAction = {
      type: DELETE_MOVIE_REQUEST_ERROR,
      payload: { error: {} },
    };
    expect(deleteMovieRequestError({})).toEqual(expectedAction);
  });

  it('should create deleteMovieRequestStart action', () => {
    const expectedAction = {
      type: DELETE_MOVIE_REQUEST_START,
    };
    expect(deleteMovieRequestStart()).toEqual(expectedAction);
  });
});
