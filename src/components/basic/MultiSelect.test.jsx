import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './MultiSelect';
import '@testing-library/jest-dom/extend-expect';

describe('MultiSelect', () => {
  test('should show options', () => {
    const onChange = jest.fn();
    const {
      getByText, findByText, getByDisplayValue,
    } = render(<MultiSelect values={['Test']} options={['Test', 'Option']} onChange={onChange} />);
    userEvent.click(getByDisplayValue(/test/i));
    waitFor(() => expect(getByText(/Option/i)).toBeInTheDocument());
    userEvent.click(getByText(/Option/i));
    waitFor(() => expect(onChange).toBeCalledTimes(1));
    waitFor(() => expect(onChange).toBeCalledWith('Option'));
    waitFor(() => expect(findByText(/Option/i)).toBeNull());
  });

  test('should show deselect option', () => {
    const onChange = jest.fn();
    const {
      getByText, findByText, getByDisplayValue,
    } = render(<MultiSelect values={['Option']} options={['Test', 'Option']} onChange={onChange} />);
    userEvent.click(getByDisplayValue(/option/i));
    waitFor(() => expect(getByText(/Option/i)).toBeInTheDocument());
    userEvent.click(getByText(/Option/i));
    waitFor(() => expect(onChange).toBeCalledTimes(1));
    waitFor(() => expect(onChange).toBeCalledWith('Option'));
    waitFor(() => expect(findByText(/Option/i)).toBeNull());
  });
});
