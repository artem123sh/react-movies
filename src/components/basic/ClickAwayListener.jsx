import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickAwayListener extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickAway);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickAway);
  }

  handleClickAway = (event) => {
    if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
      const { onClickAway } = this.props;
      onClickAway();
    }
  };

  render() {
    const { children } = this.props;
    return <div ref={this.wrapperRef}>{children}</div>;
  }
}
ClickAwayListener.propTypes = {
  children: PropTypes.node.isRequired,
  onClickAway: PropTypes.func.isRequired,
};

export default ClickAwayListener;
