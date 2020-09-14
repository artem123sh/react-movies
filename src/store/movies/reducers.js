import {
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
  GET_MOVIES_REQUEST_START,
} from './actionTypes';

const initialState = {
  movies: [],
  offset: 0,
  totalAmount: 0,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST_START: {
      return {
        ...state,
        movies: [],
        offset: 0,
        totalAmount: 0,
      };
    }
    case GET_MOVIES_REQUEST_SUCCESS: {
      const { movies, offset, totalAmount } = action.payload;
      return {
        ...state,
        movies,
        offset,
        totalAmount,
      };
    }
    case GET_MOVIES_REQUEST_ERROR: {
      const error = action.payload;
      return { ...state, error };
    }
    default:
      return state;
  }
}
