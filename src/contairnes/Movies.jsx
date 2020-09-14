import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesGrid from '../components/grids/MoviesGrid';
import EditMovieModal from '../components/modals/EditMovieModal';
import DeleteMovieModal from '../components/modals/DeleteMovieModal';
import { getMovies as getMoviesAction } from '../store/movies/actions';
import { handleSortByChange as handleSortByChangeAction } from '../store/moviesSorting/actions';
import { setGenreFilter as setGenreFilterAction } from '../store/movieFilters/actions';
import { setMovie as setMovieAction, setFormField as setFormFieldAction, clearMovieForm as clearMovieFormAction } from '../store/movieForm/actions';
import { editMovie as editMovieAction } from '../store/editMovie/actions';
import { deleteMovie as deleteMovieAction } from '../store/deleteMovie/actions';
import { DESC_ORDER, ASC_ORDER } from '../constants';

const Movies = ({
  movies, offset, totalAmount, getMovies, filter, setGenreFilter, sortBy, clearMovieForm,
  sortOrder, handleSortByChange, setFormField, setMovie, movie, editMovie, deleteMovie,
}) => {
  const [editModal, setEditModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);

  const toggleDeleteMovie = (movieId) => setDeleteModal(
    (currentDeleteModal) => (currentDeleteModal ? null : movieId),
  );

  const handleEditMovie = (movieId) => setEditModal(movieId);

  const handleEditClose = () => {
    setEditModal(null);
    clearMovieForm();
  };

  const getMoviesCb = useCallback(async () => {
    await getMovies({
      filter, offset, sortBy, sortOrder,
    });
  }, [filter, offset, sortBy, sortOrder]);

  useEffect(() => {
    getMoviesCb();
  }, [getMoviesCb]);

  useEffect(() => {
    const movieToEdit = movies.find(({ id }) => id === editModal);
    if (movieToEdit) {
      setMovie(movieToEdit);
    }
  }, [editModal]);

  const handleMovieEdit = async () => {
    await editMovie(editModal, movie);
    getMoviesCb();
    handleEditClose();
  };

  const handleDeleteEdit = async () => {
    await deleteMovie(deleteModal);
    getMoviesCb();
    setDeleteModal(null);
  };

  return (
    <>
      <MoviesGrid
        filter={filter}
        sortBy={sortBy}
        movies={movies}
        totalAmount={totalAmount}
        handleEditMovie={handleEditMovie}
        toggleDeleteMovie={toggleDeleteMovie}
        handleFilterChange={setGenreFilter}
        handleSortChange={handleSortByChange}
      />
      {editModal && (
        <EditMovieModal
          onClose={handleEditClose}
          movie={movie}
          movieId={editModal}
          setFormField={setFormField}
          resetForm={clearMovieForm}
          editMovie={handleMovieEdit}
        />
      )}
      {deleteModal && (
      <DeleteMovieModal
        deleteMovie={handleDeleteEdit}
        onClose={toggleDeleteMovie}
      />
      )}
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
  movie: PropTypes.shape().isRequired,
  totalAmount: PropTypes.number.isRequired,
  setFormField: PropTypes.func.isRequired,
  setGenreFilter: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  handleSortByChange: PropTypes.func.isRequired,
  setMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf([DESC_ORDER, ASC_ORDER]).isRequired,
  clearMovieForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    movies: { movies, offset, totalAmount },
    moviesSorting: { sortBy, sortOrder },
    movieFilters: { filter },
    movieForm: movie,
  } = state;
  return {
    movies, offset, totalAmount, filter, sortBy, sortOrder, movie,
  };
};

export default connect(mapStateToProps, {
  getMovies: getMoviesAction,
  setGenreFilter: setGenreFilterAction,
  handleSortByChange: handleSortByChangeAction,
  setMovie: setMovieAction,
  setFormField: setFormFieldAction,
  editMovie: editMovieAction,
  deleteMovie: deleteMovieAction,
  clearMovieForm: clearMovieFormAction,
})(Movies);
