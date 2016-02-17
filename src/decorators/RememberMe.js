import React, { Component } from 'react';
import {connect} from 'react-redux';
import {authWithToken} from '../actions/AuthActions';

function RememberMe(WrappedComponent) {

  @connect(state => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoggingIn: state.auth.isLoggingInWithToken
  }), {
    authWithToken
  })
  class Rememberer extends Component {

    componentDidMount() {

      const jwt = window.localStorage.jwt;

      if(typeof jwt !== 'undefined' && !this.props.isLoggedIn) {
        this.props.authWithToken(jwt);
      }
    }

    render() {
      if(this.props.isLoggingIn) {
        return (
          <div>
            <h2>Welcome Back</h2>
            <p>One moment while we log you in</p>
          </div>
        )
      } else {
        return <WrappedComponent {...this.props} {...this.state} />
      }

    }

  }

  return Rememberer;
}


export default RememberMe;
