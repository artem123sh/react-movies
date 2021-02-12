import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MoviesGridItem from './MoviesGridItem';

describe('MoviesGridItem', () => {
  test('renders MoviesGridItem\'s snapshot', () => {
    const { asFragment } = render(
      <Router>
        <MoviesGridItem
          id={1}
          title=""
          releaseDate="2020-01-01"
          posterPath="http://404.404"
          genres={[]}
          handleEditMovie={() => {}}
          toggleDeleteMovie={() => {}}
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
