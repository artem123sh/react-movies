import {
  CLEAR_MOVIE_FORM,
  SET_FORM_FIELD,
} from './actionTypes';

const initialState = {
  title: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  release_date: null,
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
  genres: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FORM_FIELD: {
      const movieField = action.payload;
      return { ...state, ...movieField };
    }
    case CLEAR_MOVIE_FORM: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
}
