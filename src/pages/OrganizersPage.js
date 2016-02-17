import React, {Component, PropTypes} from 'react';
import OrganizersContainer from '../containers/OrganizersContainer';

class OrganizersPage extends Component {
  render() {
    return(
      <div>
        <h2>
          Oragnizers
        </h2>
        <OrganizersContainer />
      </div>
    )
  }
}

export default OrganizersPage;
