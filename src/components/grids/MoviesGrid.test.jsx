import React from 'react';
import { render } from '@testing-library/react';
import MoviesGrid from './MoviesGrid';

describe('MoviesGrid', () => {
  test('renders MoviesGrid\'s snapshot', () => {
    const { asFragment } = render(<MoviesGrid
      filter=""
      sortBy="release_date"
      movies={[]}
      handleEditMovie={() => {}}
      toggleDeleteMovie={() => {}}
      handleFilterChange={() => {}}
      handleSortChange={() => {}}
      totalAmount={0}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
