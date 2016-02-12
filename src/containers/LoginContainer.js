import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {login} from '../actions/AuthActions';

@connect(state => ({
  user: state.auth.user,
  loading: state.auth.isSigningUp,
  error: state.auth.error
}), {
  login
})
class LoginContainer extends Component {

  handleLogin = (user) => {
    this.props.login(user);
  }

  render() {
    const {error, loading} = this.props;

    return (
      <div>
        <LoginForm handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default LoginContainer;
