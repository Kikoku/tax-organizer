import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SignupForm from '../components/SignupForm';

@connect(state => ({
  user: state.auth.user,
  loading: state.auth.isSigningUp,
  error: state.auth.error
}), {

})
class SignupContainer extends Component {

  render() {
    const {error, loading} = this.props;

    return (
      <div>
        <SignupForm />
      </div>
    );
  }
}

export default SignupContainer;
