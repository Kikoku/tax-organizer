import React, {Component, PropTypes} from 'react';
import EditOrganizerContainer from '../containers/OrganizerContainer';
import {Link} from 'react-router';

class OrganizerCard extends Component {

  render() {

    const {name, id} = this.props;

    return(
      <div className="Container Question row">
        <Link to={`/organizer/${id}`} className="col-lg-12">{name}</Link>
      </div>
    )
  }
}

export default OrganizerCard;
