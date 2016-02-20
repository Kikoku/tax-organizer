import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {login} from '../actions/AuthActions';

@connect(state => ({
  user: state.auth.user,
  isLoggingIn: state.auth.isLoggingIn,
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error
}), {
  login
})
class LoginContainer extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isLoggedIn) {
      const nextPath = this.context.location.query.next || '/organizer';
      this.context.history.pushState(null, nextPath);
    }
  }

  handleLogin = (user) => {
    this.props.login(user);
  }

  render() {
    const {error, loading} = this.props;

    return (
      <div className="Container row">
        <h2 className="col-lg-12">
          Login
        </h2>
        <LoginForm handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default LoginContainer;
