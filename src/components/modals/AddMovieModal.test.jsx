import React from 'react';
import { render } from '@testing-library/react';
import AddMovieModal from './AddMovieModal';

describe('AddMovieModal', () => {
  test('renders AddMovieModal\'s snapshot', () => {
    const { asFragment } = render(<AddMovieModal onClose={() => {}} handleMovieAdd={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
