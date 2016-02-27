import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/AuthActions';

@connect(state => ({
  isLoggedIn: state.auth.isLoggedIn
}), { logout })
class LogoutContainer extends Component {

  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    if(this.props.isLoggedIn) {
      this.props.logout();
    } else {
      this.context.history.pushState(null, '/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.isLoggedIn) {
      this.context.history.pushState(null, '/login');
    }
  }

  render() {
    return (
      <div>
        {!this.props.isLoggedIn && <p>You are now logged out</p>}
      </div>
    );
  }
}

export default LogoutContainer;
