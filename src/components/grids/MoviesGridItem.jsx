import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieActionsDropdown from '../movie/MovieActionsDropdown';
import Poster from '../movie/Poster';

const StyledMovieActionsDropdown = styled(MovieActionsDropdown)`
  position: absolute;
  top: 3%;
  right: 5%;
  display: none;
`;

const StyledPoster = styled(Poster)`
  height: 85%;
  width: 100%;
  transition: all 500ms;
`;

const Title = styled.span`
  margin: 0.5rem 0;
  display: inline-block;
  color: inherit;
  opacity: 0.7;
  font-weight: bold;
  font-size: 1rem;
  transition: all 500ms;
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
  transition: all 500ms;
`;

const Genres = styled.span`
  margin-bottom: 1rem;
  display: block;
  color: inherit;
  opacity: 0.5;
  transition: all 500ms;
`;

const StyledContainer = styled.div`
  width: 100%;
  &:hover {
    ${Title}, ${Genres}, ${Year} {
      opacity: 1;
    }
    ${StyledMovieActionsDropdown} {
      display: block;
    }
    ${StyledPoster} {
        opacity: 0.5;
      }
  }
  position: relative;
  cursor: pointer;
`;

const StyledLink = styled(Link)` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: inherit;
  text-decoration: none;
  height: 100%;
`;

const MoviesGridItem = ({
  id, title, releaseDate, posterPath, genres, handleEditMovie, toggleDeleteMovie,
}) => {
  const onEdit = () => handleEditMovie(id);
  const onDelete = () => toggleDeleteMovie(id);

  return (
    <StyledContainer>
      <StyledMovieActionsDropdown onEdit={onEdit} onDelete={onDelete} />
      <StyledLink to={`/${id}`}>
        <StyledPoster posterPath={posterPath} alt="poster" />
        <div>
          <Title>{title}</Title>
          <Year>{new Date(releaseDate).getFullYear()}</Year>
          <Genres>{genres.length > 2 ? genres.join(', ') : genres.join(' & ')}</Genres>
        </div>
      </StyledLink>
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
