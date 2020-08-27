import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../theme';

const Option = ({
  // eslint-disable-next-line no-unused-vars
  selected, className, children,
}) => <li className={className}>{children}</li>;

Option.defaultProps = {
  className: undefined,
  selected: false,
};

Option.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const StyledOption = styled(Option)`
  ${({ selected }) => selected && `background: ${PRIMARY};`}
  color: inherit;
  text-transform: uppercase;
  padding: 0.5rem 2rem;
  display: block;
  cursor: pointer;
  &:hover {
    ${({ selected }) => (selected ? 'opacity: 0.7;' : `background: ${PRIMARY}`)}
`;

export default StyledOption;
