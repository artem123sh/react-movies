import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsView from '../components/header/MovieDetails';

const movie = {
  id: 210577,
  title: 'Gone Girl',
  tagline: "You don't know what you've got 'til it's...",
  vote_average: 7.9,
  vote_count: 7458,
  release_date: '2014-10-01',
  poster_path: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qymaJhucquUwjpb8oiqynMeXnID.jpg',
  overview: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
  budget: 61000000,
  revenue: 369330363,
  genres: [
    'Mystery',
    'Thriller',
    'Drama',
  ],
  runtime: 145,
};

const MovieDetails = () => {
  const movieId = useParams();

  useEffect(() => {
    globalThis.scrollTo(0, 0);
  }, [movieId]);

  return (
    <MovieDetailsView
      title={movie.title}
      releaseDate={movie.release_date}
      posterPath={movie.poster_path}
      runtime={movie.runtime}
      tagline={movie.tagline}
      voteAverage={movie.vote_average}
      overview={movie.overview}
    />
  );
};

export default MovieDetails;
