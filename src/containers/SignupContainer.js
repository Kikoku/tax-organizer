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
      <div className="Container row">
        <h2 className="col-lg-12">
          Sign Up
        </h2>
        <SignupForm handleSignup={this.handleSignup}/>
      </div>
    );
  }
}

export default SignupContainer;
