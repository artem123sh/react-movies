import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';
import '@testing-library/jest-dom/extend-expect';

describe('Select', async () => {
  test('should show options', () => {
    const onChange = jest.fn();
    const { getByText, findByText } = render(<Select value="test" options={{ test: 'Test', option: 'Option' }} onChange={onChange} />);
    userEvent.click(getByText(/test/i));
    waitFor(() => expect(getByText(/Option/i)).toBeInTheDocument());
    userEvent.click(getByText(/Option/i));
    waitFor(() => expect(onChange).toBeCalledTimes(1));
    waitFor(() => expect(findByText(/Option/i)).toBeNull());
  });
});
