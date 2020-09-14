import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import AddMovieModal from '../components/modals/AddMovieModal';
import { setFormField as setFormFieldAction, clearMovieForm as clearMovieFormAction } from '../store/movieForm/actions';
import { addMovie as addMovieAction } from '../store/addMovie/actions';
import { getMovies as getMoviesAction } from '../store/movies/actions';
import { DESC_ORDER, ASC_ORDER } from '../constants';

const SearchMovie = ({
  movie, setFormField, addMovie, getMovies, filter, offset, sortBy, sortOrder, clearMovieForm,
}) => {
  const [addMovieModal, setAddMovieModal] = useState(false);

  useEffect(() => {
    clearMovieForm();
  }, [addMovieModal]);

  const toggleAddMovieModal = () => {
    setAddMovieModal((newAddMovieModal) => !newAddMovieModal);
  };

  const handleMovieAdd = async () => {
    await addMovie(movie);
    await getMovies({
      filter, offset, sortBy, sortOrder,
    });
    setAddMovieModal(false);
  };

  return (
    <>
      <Header toggleAddMovieModal={toggleAddMovieModal} />
      {addMovieModal && (
        <AddMovieModal
          movie={movie}
          handleMovieAdd={handleMovieAdd}
          setFormField={setFormField}
          resetForm={clearMovieForm}
          onClose={toggleAddMovieModal}
        />
      )}
    </>
  );
};

SearchMovie.propTypes = {
  movie: PropTypes.shape().isRequired,
  setFormField: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.oneOf([DESC_ORDER, ASC_ORDER]).isRequired,
  clearMovieForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    movieForm: movie,
    movies: { offset },
    moviesSorting: { sortBy, sortOrder },
    movieFilters: { filter },
  } = state;
  return {
    movie, offset, filter, sortBy, sortOrder,
  };
};

export default connect(mapStateToProps, {
  setFormField: setFormFieldAction,
  addMovie: addMovieAction,
  getMovies: getMoviesAction,
  clearMovieForm: clearMovieFormAction,
})(SearchMovie);
