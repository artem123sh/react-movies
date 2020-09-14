import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Select = ({
  value, children, className, onChange,
}) => (
  <select className={className} value={value} onChange={onChange}>
    {children}
  </select>
);

Select.defaultProps = {
  className: undefined,
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const StyledSelect = styled(Select)`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(
      "data:image/svg+xml;utf8,<svg
        fill='red'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        xmlns='http://www.w3.org/2000/svg'>
          <path d='M7 10l5 5 5-5z'/>
          <path d='M0 0h24v24H0z' fill='none'/></svg>"
    );
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  padding-right: 2rem;
  padding-left: 1rem;
  color: inherit;
  text-transform: uppercase;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;

export default StyledSelect;
