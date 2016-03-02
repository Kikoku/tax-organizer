import React, {Component, PropTypes} from 'react';
import ProfileContainer from '../containers/ProfileContainer';

class ProfilePage extends Component {
  render() {
    return(
      <div className="Page col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <ProfileContainer />
      </div>
    )
  }
}

export default ProfilePage;
