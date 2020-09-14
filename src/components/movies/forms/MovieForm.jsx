import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../../basic/Input';
import DatePicker from '../../basic/DatePicker';
import MultiSelect from '../../basic/MultiSelect';
import Label from '../../basic/Label';

const StyledLabel = styled(Label)`
  margin-bottom: 0.5rem;
`;

const inputStyles = `
  margin: 0.5rem 0 1.5rem 0;
`;

const StyledDatePicker = styled(DatePicker)`
  width: calc(100% - 2rem);
  padding: 0 1rem;
`;

const StyledInput = styled(Input)`
  width: calc(100% - 2rem);
  padding: 0 1rem;
  ${inputStyles}
`;

const StyledMultuSelect = styled(MultiSelect)`
  ${inputStyles}
`;

const DatePickerContainer = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
  ${inputStyles}
`;

const MovieForm = ({ movie, children }) => (
  <form>
    <StyledLabel htmlFor="title">Title</StyledLabel>
    <StyledInput id="title" placeholder="Title" defaultValue={movie.title} />
    <StyledLabel htmlFor="release_date">Release Date</StyledLabel>
    <DatePickerContainer>
      <StyledDatePicker id="release_date" placeholder="Select Date" value={movie.release_date} />
    </DatePickerContainer>
    <StyledLabel htmlFor="poster_path">Movie Url</StyledLabel>
    <StyledInput id="poster_path" placeholder="Movie Url here" defaultValue={movie.poster_path} />
    <StyledLabel htmlFor="genres">Genre</StyledLabel>
    <StyledMultuSelect
      id="genres"
      placeholder="Select Genre"
      values={movie.genres}
      options={['Drama', 'Thriller', 'Crime', 'Mystery', 'Animation']}
    />
    <StyledLabel htmlFor="overview">Overview</StyledLabel>
    <StyledInput id="overview" placeholder="Overview here" defaultValue={movie.overview} />
    <StyledLabel htmlFor="runtime">Runtime</StyledLabel>
    <StyledInput id="runtime" placeholder="Runtime here" defaultValue={movie.runtime ? movie.runtime.toString() : ''} />
    {children}
  </form>
);

MovieForm.defaultProps = {
  movie: {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: 0,
  },
};

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
};

export default MovieForm;
