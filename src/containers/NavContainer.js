import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class NavContainer extends Component {

  render() {

    return (
      <div>
        <Link to="/signup" className="col-xs-12 col-md-2"><i className="fa fa-user-plus"></i> Signup</Link>
        <Link to="/login" className="col-xs-12 col-md-2"><i className="fa fa-lock"></i> Login</Link>
      </div>
    );
  }
}

export default NavContainer;
