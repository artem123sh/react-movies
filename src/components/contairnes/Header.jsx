import React, { Component } from 'react';
import Header from '../header';
import AddMovieModal from '../movies/modals/AddMovieModal';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { addMovieModal: false };
  }

  toggleAddMovieModal = () => {
    this.setState(({ addMovieModal }) => ({ addMovieModal: !addMovieModal }));
  }

  render() {
    const { addMovieModal } = this.state;
    return (
      <>
        <Header toggleAddMovieModal={this.toggleAddMovieModal} />
        {addMovieModal && <AddMovieModal onClose={this.toggleAddMovieModal} />}
      </>
    );
  }
}

export default HeaderContainer;
