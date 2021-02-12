import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders Header\'s snapshot', () => {
    const { asFragment } = render(
      <Header
        toggleAddMovieModal={() => {}}
        handleSearchChange={() => {}}
        handleSearch={() => {}}
        search="search"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
