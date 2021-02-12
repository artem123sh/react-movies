import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import ErrorView from './ErrorView';

describe('ErrorBoundary', () => {
  test('renders ErrorView after didCatch', () => {
    const Throws = () => {
      throw new Error();
    };

    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    const { asFragment } = render(<Router><ErrorBoundary><Throws /></ErrorBoundary></Router>);
    const { asFragment: expected } = render(<Router><ErrorView errorLabel="Something went wrong..." error="Error!" /></Router>);
    expect(asFragment()).toEqual(expected());
    spy.mockRestore();
  });
});
