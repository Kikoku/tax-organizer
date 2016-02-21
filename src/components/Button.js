import React, {Component, PropTypes} from 'react';

class SectionContainer extends Component {

  handleClick = (e) => {
    e.preventDefault(e);
    this.props.handleClick();
  }

  render() {
    return (
      <div className={`EditButton col-xs-3 col-sm-3 col-md-3 col-lg-3 ${ this.props.toggle ? 'Secondary' : '' }`} onClick={this.handleClick}>
        {this.props.children}
      </div>
    )
  }
}

export default SectionContainer;
