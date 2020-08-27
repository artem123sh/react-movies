import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieActionsDropdown from './MovieActionsDropdown';

const StyledMovieActionsDropdown = styled(MovieActionsDropdown)`
  position: absolute;
  top: 3%;
  right: 5%;
  display: none;
`;

const StyledContainer = styled.div`
  width: 100%;
  &:hover ${StyledMovieActionsDropdown} {
    display: block;
  }
  position: relative;
`;

const Poster = styled.img`
  height: auto;
  width: 100%;
`;

const Title = styled.span`
  margin: 0.5rem 0;
  display: inline-block;
  color: inherit;
  opacity: 0.7;
  font-weight: bold;
  font-size: 1rem;
`;

const Year = styled.span`
  margin-top: 0.5rem;
  padding: 0.1rem 0.8rem;
  display: inline-block;
  color: inherit;
  opacity: 0.7;
  font-size: 1rem;
  border: solid 1px;
  border-radius: 5px;
  float: right;
`;

const Genres = styled.span`
  margin-bottom: 1rem;
  display: block;
  color: inherit;
  opacity: 0.5;
`;

const MoviesGridItem = ({
  id, title, releaseDate, posterPath, genres, handleEditMovie, toggleDeleteMovie,
}) => {
  const onEdit = () => handleEditMovie(id);
  const onDelete = () => toggleDeleteMovie(id);

  return (
    <StyledContainer>
      <StyledMovieActionsDropdown onEdit={onEdit} onDelete={onDelete} />
      <Poster src={posterPath} alt="poster" />
      <Title>{title}</Title>
      <Year>{new Date(releaseDate).getFullYear()}</Year>
      <Genres>{genres.length > 2 ? genres.join(', ') : genres.join(' & ')}</Genres>
    </StyledContainer>
  );
};

MoviesGridItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEditMovie: PropTypes.func.isRequired,
  toggleDeleteMovie: PropTypes.func.isRequired,
};

export default MoviesGridItem;
