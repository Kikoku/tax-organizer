import React, {Component, PropTypes} from 'react';
import OrganizersContainer from '../containers/OrganizersContainer';

class OrganizersPage extends Component {
  render() {
    return(
      <div className="Page">
        <OrganizersContainer />
      </div>
    )
  }
}

export default OrganizersPage;
