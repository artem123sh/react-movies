import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as axios from 'axios';
import {
  editMovie, editMovieRequestSuccess, editMovieRequestStart, editMovieRequestError,
} from './actions';
import {
  EDIT_MOVIE_REQUEST_START,
  EDIT_MOVIE_REQUEST_SUCCESS,
  EDIT_MOVIE_REQUEST_ERROR,
} from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('editMovie actions', () => {
  it('should create editMovie action', async () => {
    axios.put.mockImplementationOnce(() => Promise.resolve());
    const expectedActions = [
      { type: EDIT_MOVIE_REQUEST_START },
      { type: EDIT_MOVIE_REQUEST_SUCCESS },
    ];
    const store = mockStore();
    await store.dispatch(editMovie());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create editMovie action for failed response', async () => {
    axios.put.mockImplementationOnce(() => Promise.reject(new Error()));
    const expectedActions = [
      { type: EDIT_MOVIE_REQUEST_START },
      { type: EDIT_MOVIE_REQUEST_ERROR, payload: { error: '' } },
    ];
    const store = mockStore();
    try {
      await store.dispatch(editMovie());
    } catch (e) {
      expect(e).toEqual(new Error());
    }
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create editMovieRequestSuccess action', () => {
    const expectedAction = {
      type: EDIT_MOVIE_REQUEST_SUCCESS,
    };
    expect(editMovieRequestSuccess()).toEqual(expectedAction);
  });

  it('should create editMovieRequestError action', () => {
    const expectedAction = {
      type: EDIT_MOVIE_REQUEST_ERROR,
      payload: { error: {} },
    };
    expect(editMovieRequestError({})).toEqual(expectedAction);
  });

  it('should create editMovieRequestStart action', () => {
    const expectedAction = {
      type: EDIT_MOVIE_REQUEST_START,
    };
    expect(editMovieRequestStart()).toEqual(expectedAction);
  });
});
