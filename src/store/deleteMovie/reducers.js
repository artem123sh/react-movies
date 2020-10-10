import {
  DELETE_MOVIE_REQUEST_SUCCESS,
  DELETE_MOVIE_REQUEST_ERROR,
  DELETE_MOVIE_REQUEST_START,
} from './actionTypes';

const initialState = {
  isLoaded: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_MOVIE_REQUEST_START: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case DELETE_MOVIE_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case DELETE_MOVIE_REQUEST_ERROR: {
      const error = action.payload;
      return { ...state, error, isLoaded: true };
    }
    default:
      return state;
  }
}
