import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

@connect(state => ({
  user: state.auth.user,
  isLoggedIn: state.auth.isLoggedIn
}))

class NavContainer extends Component {

  render() {

    const {user, isLoggedIn} = this.props;

    return (
      <div>
        {isLoggedIn
          ? <div className="col-xs-12 col-md-2 username">{user.name}</div>
          : <Link to="/signup" className="col-xs-12 col-md-2"><i className="fa fa-user-plus"></i> Signup</Link>
        }
        {isLoggedIn
          ? <Link to="/logout" className="col-xs-12 col-md-2"><i className="fa fa-lock"></i> Logout</Link>
          : <Link to="/login" className="col-xs-12 col-md-2"><i className="fa fa-lock"></i> Login</Link>
        }
        <Link to="/organizer" className="col-xs-12 col-md-2"><i className="fa fa-pencil-square-o"></i> Organizer</Link>
      </div>
    );
  }
}

export default NavContainer;
