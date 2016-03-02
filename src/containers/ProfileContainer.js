import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Profile from '../components/Profile';

@connect(state => ({
  user: state.auth.user
}), {
})
class ProfileContainer extends Component {

  render() {

    const {user} = this.props;

    return(
      <div className="Container row">
        <h2 className="col-lg-12">
          {user.name}
        </h2>
        <Profile user={user} />
      </div>
    )
  }
}

export default ProfileContainer;
