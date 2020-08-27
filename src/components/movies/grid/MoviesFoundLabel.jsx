import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MoviesFoundLabel = ({ number, className }) => (
  <div className={className}>
    <b>{number}</b>
    {' '}
    movies found
  </div>
);

MoviesFoundLabel.defaultProps = {
  className: '',
};

MoviesFoundLabel.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
};

const StyledMoviesFoundLabel = styled(MoviesFoundLabel)`
  color: inherit;
  font-size: 1.3rem;
  padding: 1rem 0;
`;

export default StyledMoviesFoundLabel;
