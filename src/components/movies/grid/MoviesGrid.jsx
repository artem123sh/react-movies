import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BACKGROUND } from '../../../theme';
import GridControls from './controls/GridControls';
import MoviesFoundLabel from './MoviesFoundLabel';
import MovieGridItem from './MovieGridItem';

const StyledContainer = styled.div`
  background: ${BACKGROUND};
  padding: 0 5%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
  grid-row-gap: 3vh;
  grid-column-gap: 3vw;
  height: auto;
`;

const MoviesGrid = ({
  filter, sortBy, movies, handleEditMovie, toggleDeleteMovie, handleFilterChange, handleSortChange,
}) => (
  <StyledContainer>
    <GridControls
      filter={filter}
      sortBy={sortBy}
      handleFilterChange={handleFilterChange}
      handleSortChange={handleSortChange}
    />
    <MoviesFoundLabel number={movies.length} />
    <Grid>
      {movies.map((movie) => (
        <MovieGridItem
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
          genres={movie.genres}
          handleEditMovie={handleEditMovie}
          toggleDeleteMovie={toggleDeleteMovie}
        />
      ))}
    </Grid>
  </StyledContainer>
);

MoviesGrid.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleEditMovie: PropTypes.func.isRequired,
  toggleDeleteMovie: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
};

export default MoviesGrid;
