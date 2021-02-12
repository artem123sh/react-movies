import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  test('renders MovieDetails\'s snapshot', () => {
    const { asFragment } = render(
      <Router>
        <MovieDetails
          title=""
          releaseDate="2020-01-01"
          posterPath="http://404.404"
          runtime={1}
          voteAverage={1}
          tagline=""
          overview=""
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders MovieDetails\'s snapshot with default vote average', () => {
    const { asFragment } = render(
      <Router>
        <MovieDetails
          title=""
          releaseDate="2020-01-01"
          posterPath="http://404.404"
          runtime={1}
          tagline=""
          overview=""
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders MovieDetails\'s snapshot with green vote average', () => {
    const { asFragment } = render(
      <Router>
        <MovieDetails
          title=""
          releaseDate="2020-01-01"
          posterPath="http://404.404"
          runtime={1}
          voteAverage={8}
          tagline=""
          overview=""
        />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
