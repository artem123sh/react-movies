import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from '../basic/Input';
import DatePicker from '../basic/DatePicker';
import MultiSelect from '../basic/MultiSelect';
import Label from '../basic/Label';
import { GENRES } from '../../constants';

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

const MovieForm = ({
  movie, children, setFormField,
}) => (
  <form>
    <StyledLabel htmlFor="title">Title</StyledLabel>
    <StyledInput id="title" placeholder="Title" value={movie.title} onChange={(e) => setFormField('title', e.target.value)} />
    <StyledLabel htmlFor="release_date">Release Date</StyledLabel>
    <DatePickerContainer>
      <StyledDatePicker id="release_date" placeholder="Select Date" value={movie.release_date ? new Date(movie.release_date) : null} onChange={(date) => setFormField('release_date', date.toISOString().slice(0, 10))} />
    </DatePickerContainer>
    <StyledLabel htmlFor="poster_path">Movie Url</StyledLabel>
    <StyledInput id="poster_path" placeholder="Movie Url here" value={movie.poster_path} onChange={(e) => setFormField('poster_path', e.target.value)} />
    <StyledLabel htmlFor="genres">Genre</StyledLabel>
    <StyledMultuSelect
      id="genres"
      placeholder="Select Genre"
      values={movie.genres}
      options={GENRES}
      onChange={(genres) => setFormField('genres', genres)}
    />
    <StyledLabel htmlFor="overview">Overview</StyledLabel>
    <StyledInput id="overview" placeholder="Overview here" value={movie.overview} onChange={(e) => setFormField('overview', e.target.value)} />
    <StyledLabel htmlFor="runtime">Runtime</StyledLabel>
    <StyledInput id="runtime" placeholder="Runtime here" value={movie.runtime ? movie.runtime.toString() : ''} onChange={(e) => setFormField('runtime', Number(e.target.value))} />
    <StyledLabel htmlFor="tagline">Tagline</StyledLabel>
    <StyledInput id="tagline" placeholder="Tagline" value={movie.tagline ? movie.tagline.toString() : ''} onChange={(e) => setFormField('tagline', e.target.value)} />
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
    tagline: 0,
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
    tagline: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  setFormField: PropTypes.func.isRequired,
};

export default MovieForm;
