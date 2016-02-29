import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Button extends Component {

  handleClick = (e) => {
    this.props.onClick();
  }

  render() {

    return (
      <div className={`col-lg-1 Button ${this.props.className}`} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
