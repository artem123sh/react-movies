import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store';
import App from './App';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('App', () => {
  test('should show search page on initial landing', () => {
    const { getByText } = renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>, { route: '/' },
    );
    expect(getByText(/FIND YOUR MOVIE/i)).toBeInTheDocument();
  });

  test('should show search and results page on search page landing', () => {
    const { getByText } = renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>, { route: '/search/test' },
    );
    expect(getByText(/FIND YOUR MOVIE/i)).toBeInTheDocument();
    expect(getByText(/No Movies Found/i)).toBeInTheDocument();
  });

  test('should show error page on landing not existing route', () => {
    const { getByText } = renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>, { route: '/404' },
    );
    expect(getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
