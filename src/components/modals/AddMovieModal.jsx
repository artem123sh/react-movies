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

const AddMovieModal = ({
  onClose, handleMovieAdd, setFormField, movie, resetForm,
}) => (
  <Modal size="small" title="add movie" onClose={onClose}>
    <MovieForm setFormField={setFormField} onSubmit={handleMovieAdd} movie={movie}>
      <StyledActionContainer>
        <StyledButton variant="outlined" size="large" onClick={resetForm}>Reset</StyledButton>
        <StyledButton variant="contained" size="large" onClick={handleMovieAdd}>Submit</StyledButton>
      </StyledActionContainer>
    </MovieForm>
  </Modal>
);

AddMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleMovieAdd: PropTypes.func.isRequired,
  setFormField: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  movie: PropTypes.shape().isRequired,
};

export default AddMovieModal;
