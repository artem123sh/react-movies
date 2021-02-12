import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieForm from './MovieForm';
import '@testing-library/jest-dom/extend-expect';

const spy = jest.spyOn(console, 'warn');
spy.mockImplementation(() => {});

describe('MovieForm', () => {
  test('renders MovieForm\'s snapshot', () => {
    const { asFragment } = render(<MovieForm movie={{}} onSubmit={() => {}}>test</MovieForm>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('handles title input field correctly', async () => {
    const utils = render(<MovieForm movie={{}} onSubmit={() => {}}>test</MovieForm>);
    const input = utils.getByLabelText('Title');
    input.focus();
    await userEvent.type(input, 'title');
    expect(input.value).toBe('title');
  });
});
