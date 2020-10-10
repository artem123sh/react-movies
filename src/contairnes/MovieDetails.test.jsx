import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import thunk from 'redux-thunk';
import MovieDetails from './MovieDetails';

jest.mock('../store/movie/actions', () => (
  {
    // eslint-disable-next-line no-empty-function
    getMovie: () => async function () {},
  }
));

const initialState = {
  movie: {
    movie: {
      id: 1,
      title: 'title',
      release_date: '2020-01-01',
      poster_path: 'http://404.404',
      runtime: 1,
      tagline: '',
      vote_average: 1,
      overview: '',
    },
  },
};

describe('MovieDetails', () => {
  test('should show movie details page on landing', () => {
    const reducer = () => (initialState);
    const store = createStore(reducer, applyMiddleware(thunk));
    window.scrollTo = jest.fn();
    window.history.pushState({}, '', '/film/1');
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter><MovieDetails /></BrowserRouter>
      </Provider>,
    );
    expect(getByText(/title/i)).toBeInTheDocument();
  });

  test('should show 404 if no movie found', () => {
    window.scrollTo = jest.fn();
    window.history.pushState({}, '', '/film/2');
    const reducer = () => ({ movie: { error: { error: '' } } });
    const store = createStore(reducer, applyMiddleware(thunk));
    const { queryByText } = render(
      <Provider store={store}><BrowserRouter><MovieDetails /></BrowserRouter></Provider>,
    );
    waitFor(() => expect(queryByText(/404/)).toBeInTheDocument());
  });
});
