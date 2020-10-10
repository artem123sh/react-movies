import {
  setGenreFilter,
} from './actions';
import { SET_GENRE_FILTER } from './actionTypes';

describe('movieFilters actions', () => {
  it('should create setGenreFilter action', () => {
    const expectedAction = {
      type: SET_GENRE_FILTER,
      payload: { filter: '' },
    };
    expect(setGenreFilter('')).toEqual(expectedAction);
  });
});
