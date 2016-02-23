import React, {Component, PropTypes} from 'react';
import LoginContainer from '../containers/LoginContainer';

class LoginPage extends Component {
  render() {
    return(
      <div className="Page col-xs-10 col-xs-push-1 col-sm-8 col-sm-push-2 col-md-3 col-md-push-4">
        <LoginContainer />
      </div>
    )
  }
}

export default LoginPage;
