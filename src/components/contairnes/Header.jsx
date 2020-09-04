import React, { useState } from 'react';
import Header from '../header/Header';
import AddMovieModal from '../modals/AddMovieModal';

const HeaderContainer = () => {
  const [addMovieModal, setAddMovieModal] = useState(false);

  const toggleAddMovieModal = () => {
    setAddMovieModal((newAddMovieModal) => (!newAddMovieModal));
  };

  return (
    <>
      <Header toggleAddMovieModal={toggleAddMovieModal} />
      {addMovieModal && <AddMovieModal onClose={toggleAddMovieModal} />}
    </>
  );
};

export default HeaderContainer;
