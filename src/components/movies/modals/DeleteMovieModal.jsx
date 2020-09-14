import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from '../../basic/Modal';
import Button from '../../basic/Button';

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

const StyledMessage = styled.span`
  font-size: 1.5rem;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const DeleteMovieModal = ({ onClose }) => (
  <Modal title="delete movie" onClose={onClose}>
    <StyledMessage>Are you sure you want to delete this movie?</StyledMessage>
    <StyledActionContainer>
      <StyledButton variant="contained" size="large">Confirm</StyledButton>
    </StyledActionContainer>
  </Modal>
);

DeleteMovieModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DeleteMovieModal;
