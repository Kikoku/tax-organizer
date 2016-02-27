import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import SignupForm from '../components/SignupForm';
import {signup} from '../actions/AuthActions';

@connect(state => ({
  user: state.auth.user,
  loading: state.auth.isSigningUp,
  isLoggedIn: state.auth.isLoggedIn,
  error: state.auth.error
}), {
  signup
})
class SignupContainer extends Component {

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
