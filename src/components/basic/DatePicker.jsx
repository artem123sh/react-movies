import React, { Component } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import Input from './Input';

import 'react-datepicker/dist/react-datepicker.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = { date: value ? new Date(value) : null };
  }

  changeDate = (date) => {
    this.setState({ date });
  }

  render() {
    const {
      className, value, id, placeholder,
    } = this.props;
    const { date } = this.state;
    return (
      <ReactDatePicker
        className={className}
        selected={date}
        onChange={this.changeDate}
        customInput={<Input id={id} value={value} />}
        placeholderText={placeholder}
      />
    );
  }
}

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
