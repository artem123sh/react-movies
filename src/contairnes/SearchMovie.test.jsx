import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import SearchMovie from './SearchMovie';

const reducer = () => ({
  movies: { offset: 0 },
  moviesSorting: { sortOrder: 'desc', sortBy: '' },
  movieFilters: { filter: '' },
});
const store = createStore(reducer, applyMiddleware(thunk));

describe('SearchMovie', () => {
  test('should show add movie pop up', () => {
    window.history.pushState({}, '', '/seach/test');
    const mock = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter><SearchMovie addMovie={mock} /></BrowserRouter>
      </Provider>,
    );
    const button = getByText('+ Add Movie');
    userEvent.click(button);
    // expect(input.value).toBe('title');

    expect(getByText(/title/i)).toBeInTheDocument();
  });

  test('should handle search input', () => {
    window.history.pushState({}, '', '/seach/test');
    const mock = jest.fn();
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter><SearchMovie addMovie={mock} /></BrowserRouter>
      </Provider>,
    );
    const search = getByPlaceholderText('What do you want to watch?');
    userEvent.type(search, 'search');
    expect(search.value).toBe('search');
  });

  test('should search on new input', () => {
    window.history.pushState({}, '', '/seach/test');
    const mock = jest.fn();
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <BrowserRouter><SearchMovie addMovie={mock} /></BrowserRouter>
      </Provider>,
    );
    const search = getByPlaceholderText('What do you want to watch?');
    const searchBtn = getByText(/search/i);
    userEvent.type(search, 'search');
    userEvent.click(searchBtn);
    waitFor(() => expect(queryByText(/No Movies Found/i)).toBeInTheDocument());
  });
});
