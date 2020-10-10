import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore, applyMiddleware } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import Movies from './Movies';
import { deleteMovie } from '../store/deleteMovie/actions';
import { editMovie } from '../store/editMovie/actions';

jest.mock('../store/deleteMovie/actions');
jest.mock('../store/editMovie/actions');

const initialState = {
  movies: {
    offset: 0,
    totalAmount: 1,
    movies: [{
      id: 5, title: 'title1', genres: [], release_date: '2020-01-01', poster_path: 'http://404.404', overview: '', runtime: 1, tagline: '',
    }],
  },
  moviesSorting: { sortOrder: 'desc', sortBy: 'release_date' },
  movieFilters: { filter: '' },
};

describe('Movies', () => {
  test('should allow to delete movie', () => {
    const reducer = () => (initialState);
    const store = createStore(reducer, applyMiddleware(thunk));
    const mock = jest.fn();
    deleteMovie.mockImplementation(() => mock);
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <BrowserRouter><Movies /></BrowserRouter>
      </Provider>,
    );
    userEvent.hover(getByText(/title/i));
    userEvent.click(getByText(/⠇/i));
    userEvent.click(getByText(/delete/i));
    expect(getByText(/Are you sure you want to delete this movie?/i)).toBeInTheDocument();
    userEvent.click(getByText(/confirm/i));
    expect(mock).toBeCalledTimes(1);
    waitFor(() => expect(queryByText(/Are you sure you want to delete this movie?/i)).toBeNull());
  });

  test('should not allow to edit without required fields', async () => {
    const reducer = () => (initialState);
    const store = createStore(reducer, applyMiddleware(thunk));
    const mock = jest.fn();
    editMovie.mockImplementation(() => mock);
    const { getByText, queryByText, getByDisplayValue } = render(
      <Provider store={store}>
        <BrowserRouter><Movies /></BrowserRouter>
      </Provider>,
    );
    userEvent.hover(getByText(/title/i));
    userEvent.click(getByText(/⠇/i));
    userEvent.click(getByText(/edit/i));
    expect(getByText(/title1/i)).toBeInTheDocument();
    const input = getByDisplayValue(/title1/i);
    await userEvent.click(input, '');
    await userEvent.click(getByText(/save/i));
    waitFor(() => expect(queryByText(/Required Field!/i)).toBeNull());
  });

  test('should allow edit movie', async () => {
    const reducer = () => (initialState);
    const store = createStore(reducer, applyMiddleware(thunk));
    const mock = jest.fn();
    editMovie.mockImplementation(() => mock);
    const { getByText, queryByText } = render(
      <Provider store={store}>
        <BrowserRouter><Movies /></BrowserRouter>
      </Provider>,
    );
    userEvent.hover(getByText(/title/i));
    userEvent.click(getByText(/⠇/i));
    userEvent.click(getByText(/edit/i));
    expect(getByText(/title1/i)).toBeInTheDocument();
    userEvent.click(getByText(/save/i));
    userEvent.click(getByText(/save/i));
    waitFor(() => expect(queryByText(/edit movie/i)).toBeNull());
    waitFor(() => expect(mock).toBeCalledTimes(1));
  });
});
