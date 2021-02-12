import React from 'react';
import { render } from '@testing-library/react';
import EditMovieModal from './EditMovieModal';

describe('EditMovieModal', () => {
  test('renders EditMovieModal\'s snapshot', () => {
    const { asFragment } = render(<EditMovieModal
      movie={{}}
      movieId={1}
      onClose={() => {}}
      editMovie={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
