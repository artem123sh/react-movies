import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../basic/Modal';
import Button from '../basic/Button';
import MovieForm from '../forms/MovieForm';

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const AddMovieModal = ({ onClose }) => (
  <Modal size="small" title="add movie" onClose={onClose}>
    <MovieForm>
      <StyledActionContainer>
        <StyledButton variant="outlined" size="large">Reset</StyledButton>
        <StyledButton variant="contained" size="large">Submit</StyledButton>
      </StyledActionContainer>
    </MovieForm>
  </Modal>
);

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddMovieModal;
