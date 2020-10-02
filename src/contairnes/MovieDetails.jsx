import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetailsView from '../components/header/MovieDetails';
import { getMovie as getMovieAction } from '../store/movie/actions';

const MovieDetails = ({ getMovie, movie, error }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovie(Number(id));
    globalThis.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (error) {
      history.push('/404');
    }
  }, [error]);

  return (
    movie && (
    <MovieDetailsView
      title={movie.title}
      releaseDate={movie.release_date}
      posterPath={movie.poster_path}
      runtime={movie.runtime}
      tagline={movie.tagline}
      voteAverage={movie.vote_average}
      overview={movie.overview}
    />
    )
  );
};

MovieDetails.defaultProps = {
  error: undefined,
  movie: undefined,
};

MovieDetails.propTypes = {
  getMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape(),
  error: PropTypes.shape(),
};

const mapStateToProps = (state) => {
  const { movie: { movie, error } } = state;
  return { movie, error };
};

export default connect(mapStateToProps, { getMovie: getMovieAction })(MovieDetails);
