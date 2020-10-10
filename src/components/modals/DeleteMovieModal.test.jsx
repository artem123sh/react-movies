import React from 'react';
import { render } from '@testing-library/react';
import DeleteMovieModal from './DeleteMovieModal';

describe('DeleteMovieModal', () => {
  test('renders DeleteMovieModal\'s snapshot', () => {
    const { asFragment } = render(
      <DeleteMovieModal onClose={() => {}} deleteMovie={() => {}} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
