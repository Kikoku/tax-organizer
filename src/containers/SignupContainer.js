import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SignupForm from '../components/SignupForm';
import {signup} from '../actions/AuthActions';

@connect(state => ({
  user: state.auth.user,
  loading: state.auth.isSigningUp,
  error: state.auth.error
}), {
  signup
})
class SignupContainer extends Component {

  handleSignup = (user) => {
    this.props.signup(user);
  }

  render() {
    const {error, loading} = this.props;

    return (
      <div>
        <SignupForm handleSignup={this.handleSignup}/>
      </div>
    );
  }
}

export default SignupContainer;
