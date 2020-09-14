import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../basic/Logo';
import Button from '../basic/Button';
import Title from '../basic/Title';
import background from './background.png';
import { FOOTER_BACKGROUND } from '../../theme';

const StyledTitle = styled(Title)`
  position: absolute;
  top: 25%;
  left: 10%;
`;

const StyledHeader = styled.header`
  height: 25rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  ), url(${background});
  background-size: 110%;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1rem; 
  left: 5%;
  z-index: 15;
`;

const SearchMovieInput = styled.input`
  height: 1.5rem;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  background: ${FOOTER_BACKGROUND};
  opacity: 0.7;
  font-size: 1.5rem;
  color: inherit;
`;

const SearchButton = styled(Button)`
  margin: 0 0.5rem;
`;

const AddMovieButton = styled(Button)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

const Header = ({ toggleAddMovieModal }) => (
  <StyledHeader>
    <LogoContainer><Logo /></LogoContainer>
    <AddMovieButton onClick={toggleAddMovieModal}>+ Add Movie</AddMovieButton>
    <StyledTitle>Find your movie</StyledTitle>
    <SearchMovieInput placeholder="What do you want to watch?" />
    <SearchButton size="large" variant="contained" onClick={() => {}}>Search</SearchButton>
  </StyledHeader>
);

Header.propTypes = {
  toggleAddMovieModal: PropTypes.func.isRequired,
};

export default Header;
