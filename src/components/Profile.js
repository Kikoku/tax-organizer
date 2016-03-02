import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {

  render() {

    const {user} = this.props;

    return (
      <div className="Question col-lg-12" onSubmit={this.handleSubmit}>
        <label>
          Role
        </label>
        <p>
          {user.role}
        </p>
        <label>
          E-mail
        </label>
        <p>
          {user.email}
        </p>
      </div>
    );
  }
}

export default Profile;
