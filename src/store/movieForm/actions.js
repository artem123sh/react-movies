/* eslint-disable camelcase */
import {
  CLEAR_MOVIE_FORM,
  SET_FORM_FIELD,
} from './actionTypes';

export const setFormField = (field, value) => ({
  type: SET_FORM_FIELD,
  payload: { [field]: value },
});

export const clearMovieForm = () => ({
  type: CLEAR_MOVIE_FORM,
});

export const setMovie = (movie) => async (dispatch) => {
  const {
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres,
  } = movie;
  Object.entries({
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres,
  }).forEach(([key, value]) => dispatch(setFormField(key, value)));
};
