import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import movies from './movies/reducers';
import moviesSorting from './moviesSorting/reducers';
import movieFilters from './movieFilters/reducers';

const rootReducer = combineReducers(
  {
    movies, moviesSorting, movieFilters,
  },
);

export default createStore(
  rootReducer, applyMiddleware(thunk.withExtraArgument(process.env.REACT_APP_MOVIES_API_URL)),
);
