import React, {Component, PropTypes} from 'react';
import EditOrganizerContainer from '../containers/OrganizerContainer';
import {Link} from 'react-router';

class OrganizerCard extends Component {

  render() {

    const {name, id} = this.props;

    return(
      <div className="col-xs-4 col-xs-offset-1 col-lg-2 col-lg-offset-1">
        <Link to={`/organizer/${id}`}>{name}</Link>
      </div>
    )
  }
}

export default OrganizerCard;
