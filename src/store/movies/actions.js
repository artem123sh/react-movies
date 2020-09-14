import axios from 'axios';
import {
  GET_MOVIES_REQUEST_START,
  GET_MOVIES_REQUEST_SUCCESS,
  GET_MOVIES_REQUEST_ERROR,
} from './actionTypes';

export const getMoviesRequestSuccess = (movies) => ({
  type: GET_MOVIES_REQUEST_SUCCESS,
  payload: movies,
});

export const getMoviesRequestStart = () => ({
  type: GET_MOVIES_REQUEST_START,
});

export const getMoviesRequestError = (error) => ({
  type: GET_MOVIES_REQUEST_ERROR,
  payload: { error },
});

export const getMovies = (
  {
    filter, offset: currentOffset, sortBy, sortOrder,
  },
) => async (dispatch, getState, apiUrl) => {
  const urlSearchParams = new URLSearchParams({
    filter, offset: currentOffset, sortBy, sortOrder,
  });
  dispatch(getMoviesRequestStart());
  // eslint-disable-next-line no-new
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const {
          data: { data: movies, totalAmount, offset },
        } = await axios.get(`${apiUrl}?limit=9&${urlSearchParams.toString()}`);
        dispatch(getMoviesRequestSuccess({ movies, totalAmount, offset }));
        return resolve();
      } catch (err) {
        dispatch(getMoviesRequestError(err.message));
        return reject(err);
      }
    })();
  });
};
