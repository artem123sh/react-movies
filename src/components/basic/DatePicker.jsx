import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import Input from './Input';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({
  className, value, id, placeholder,
}) => {
  const [date, setDate] = useState(value ? new Date(value) : null);

  return (
    <ReactDatePicker
      className={className}
      selected={date}
      onChange={(newDate) => setDate(newDate)}
      customInput={<Input id={id} value={value} />}
      placeholderText={placeholder}
    />
  );
};

DatePicker.defaultProps = {
  className: undefined,
  id: undefined,
  value: null,
  placeholder: undefined,
};

DatePicker.propTypes = {
  className: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DatePicker;
