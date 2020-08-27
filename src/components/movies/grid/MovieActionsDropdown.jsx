import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ClickAwayListener from '../../basic/ClickAwayListener';
import { PRIMARY, BACKGROUND } from '../../../theme';

const StyledMoviesAction = styled.button`
  letter-spacing: -9px;
  outline: none;
  text-align: center;
  color: inherit;
  background: ${BACKGROUND};
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 100%;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: ${PRIMARY};
  }
`;

const DropdownContent = styled.div`
  right: 1rem;
  top: 1rem;
  background: ${BACKGROUND};
  display: block;
  position: absolute;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const CloseButton = styled.span`
  cursor: pointer;
  border: none;
  color: inherit;
  font-size: 1rem;
  &:hover {
    color: ${PRIMARY};
  }
`;

const DropdownOption = styled.li`
  padding-top: 0.2rem;
  padding-right: 0.5rem;
  text-align: right;
  display: block;
`;

const SelectableDropdownOption = styled.li`
  cursor: pointer;
  display: block;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  &:hover {
    background: ${PRIMARY};
  }
`;

class MovieActionsDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: false };
  }

  toggleMenu = () => {
    this.setState(({ menu }) => ({ menu: !menu }));
  }

  render() {
    const { className, onEdit, onDelete } = this.props;
    const { menu } = this.state;
    return (
      <div>
        <StyledMoviesAction className={className} onClick={this.toggleMenu}>
          &#10247;
        </StyledMoviesAction>
        {menu && (
          <ClickAwayListener onClickAway={this.toggleMenu}>
            <DropdownContent>
              <DropdownOption>
                <CloseButton onClick={this.toggleMenu}>&#x2573;</CloseButton>
              </DropdownOption>
              <SelectableDropdownOption onClick={onEdit}>Edit</SelectableDropdownOption>
              <SelectableDropdownOption onClick={onDelete}>Delete</SelectableDropdownOption>
            </DropdownContent>
          </ClickAwayListener>
        )}
      </div>
    );
  }
}

MovieActionsDropdown.defaultProps = {
  className: '',
};

MovieActionsDropdown.propTypes = {
  className: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MovieActionsDropdown;
