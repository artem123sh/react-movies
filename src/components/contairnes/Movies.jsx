import React, { Component } from 'react';
import MoviesGrid from '../movies/grid/MoviesGrid';
import EditMovieModal from '../movies/modals/EditMovieModal';
import DeleteMovieModal from '../movies/modals/DeleteMovieModal';

const movies = [
  {
    id: 1422,
    title: 'The Departed',
    tagline: 'Lies. Betrayal. Sacrifice. How far will you take it?',
    vote_average: 8,
    vote_count: 5549,
    release_date: '2006-10-05',
    poster_path: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jyAgiqVSx5fl0NNj7WoGGKweXrL.jpg',
    overview: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    budget: 90000000,
    revenue: 289847354,
    genres: [
      'Drama',
      'Thriller',
      'Crime',
    ],
    runtime: 151,
  },
  {
    id: 1640,
    title: 'Crash',
    tagline: 'You think you know who you are. You have no idea.',
    vote_average: 7.1,
    vote_count: 1446,
    release_date: '2005-05-06',
    poster_path: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/86BdPC6RDX88NC880pLidKn2LCj.jpg',
    overview: 'Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.',
    budget: 6500000,
    revenue: 98410061,
    genres: [
      'Drama',
    ],
    runtime: 112,
  },
  {
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
  },
  {
    id: 1907,
    title: 'The Beach',
    tagline: 'Somewhere on this planet it must exist.',
    vote_average: 6.4,
    vote_count: 1630,
    release_date: '2000-02-11',
    poster_path: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4y7LxD8TSi6AtsM2xSYqUm1gu7u.jpg',
    overview: 'Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.',
    budget: 40000000,
    revenue: 144056873,
    genres: [
      'Drama',
      'Adventure',
      'Romance',
      'Thriller',
    ],
    runtime: 119,
  },
  {
    id: 510,
    title: "One Flew Over the Cuckoo's Nest",
    tagline: "If he's crazy, what does that make you?",
    vote_average: 8.3,
    vote_count: 3872,
    release_date: '1975-11-18',
    poster_path: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg',
    overview: 'While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.',
    budget: 3000000,
    revenue: 108981275,
    genres: [
      'Drama',
    ],
    runtime: 133,
  },
  {
    id: 129,
    title: 'Spirited Away',
    tagline: '',
    vote_average: 8.4,
    vote_count: 5095,
    release_date: '2001-07-20',
    poster_path: 'https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
    overview: 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    budget: 15000000,
    revenue: 274925095,
    genres: [
      'Animation',
      'Family',
      'Fantasy',
    ],
    runtime: 125,
  },
];

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      sortBy: 'release_date',
      editModal: null,
      deleteModal: null,
    };
  }

  toggleDeleteMovie = (movieId) => this.setState(
    ({ deleteModal }) => (deleteModal ? { deleteModal: null } : { deleteModal: movieId }),
  );

  handleEditMovie = (movieId) => this.setState({ editModal: movieId });

  handleEditClose = () => this.setState({ editModal: null });

  handleFilterChange = (filter) => this.setState({ filter });

  handleSortChange = (sortBy) => this.setState({ sortBy });

  render() {
    const {
      filter, sortBy, editModal, deleteModal,
    } = this.state;
    return (
      <>
        <MoviesGrid
          filter={filter}
          sortBy={sortBy}
          movies={movies}
          handleEditMovie={this.handleEditMovie}
          toggleDeleteMovie={this.toggleDeleteMovie}
          handleFilterChange={this.handleFilterChange}
          handleSortChange={this.handleSortChange}
        />
        {editModal && (
        <EditMovieModal
          onClose={this.handleEditClose}
          movie={movies.find(({ id }) => id === editModal)}
        />
        )}
        {deleteModal && (
          <DeleteMovieModal
            onClose={this.toggleDeleteMovie}
          />
        )}
      </>
    );
  }
}

export default Movies;
