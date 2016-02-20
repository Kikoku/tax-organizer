import React, {Component, PropTypes} from 'react';
import SignupContainer from '../containers/SignupContainer';

class SignupPage extends Component {
  render() {
    return(
      <div className="Page col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <SignupContainer />
      </div>
    )
  }
}

export default SignupPage;
