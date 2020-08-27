import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BACKGROUND } from '../../theme';

const Option = ({ value, className, children }) => (
  <option className={className} value={value}>{children}</option>
);

Option.defaultProps = {
  className: undefined,
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const StyledOption = styled(Option)`
  background: ${BACKGROUND};
`;

export default StyledOption;
