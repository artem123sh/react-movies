import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './actionTypes';
import { DESC_ORDER, ASC_ORDER } from '../../constants';
import { setSortBy, setSortOrder, handleSortByChange } from './actions';

const mockStore = configureMockStore([thunk]);

describe('moviesSorting actions', () => {
  it('should create setSortBy action', () => {
    const expectedAction = {
      type: SET_SORT_BY,
      payload: { sortBy: '' },
    };
    expect(setSortBy('')).toEqual(expectedAction);
  });

  it('should create setSortOrder action', () => {
    const expectedAction = {
      type: SET_SORT_ORDER,
      payload: { sortOrder: '' },
    };
    expect(setSortOrder('')).toEqual(expectedAction);
  });

  it('should create handleSortByChange action on new sorting', async () => {
    const store = mockStore({ moviesSorting: { sortBy: '' } });
    const expectedActions = [
      { type: SET_SORT_BY, payload: { sortBy: 'test' } },
      { type: SET_SORT_ORDER, payload: { sortOrder: DESC_ORDER } },
    ];
    await store.dispatch(handleSortByChange('test'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create handleSortByChange action on acs sorting', async () => {
    const store = mockStore({ moviesSorting: { sortBy: '', sortOrder: DESC_ORDER } });
    const expectedActions = [
      { type: SET_SORT_ORDER, payload: { sortOrder: ASC_ORDER } },
    ];
    await store.dispatch(handleSortByChange(''));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create handleSortByChange action on desc sorting', async () => {
    const store = mockStore({ moviesSorting: { sortBy: '', sortOrder: ASC_ORDER } });
    const expectedActions = [
      { type: SET_SORT_ORDER, payload: { sortOrder: DESC_ORDER } },
    ];
    await store.dispatch(handleSortByChange(''));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
