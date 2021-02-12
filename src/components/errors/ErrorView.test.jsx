import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorView from './ErrorView';

describe('ErrorView', () => {
  test('renders ErrorView\'s snapshot', () => {
    const { asFragment } = render(<Router><ErrorView errorLabel="label" error="error" /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
