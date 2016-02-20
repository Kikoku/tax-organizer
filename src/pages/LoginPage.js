import React, {Component, PropTypes} from 'react';
import LoginContainer from '../containers/LoginContainer';

class LoginPage extends Component {
  render() {
    return(
      <div className="Page col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <LoginContainer />
      </div>
    )
  }
}

export default LoginPage;
