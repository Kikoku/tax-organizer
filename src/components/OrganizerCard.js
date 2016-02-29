import React, {Component, PropTypes} from 'react';
import EditOrganizerContainer from '../containers/OrganizerContainer';
import {Link} from 'react-router';

class OrganizerCard extends Component {

  handleDeleteOrganizer = () => {
    this.props.handleDeleteOrganizer(this.props.id);
  }

  render() {

    const {name, id} = this.props;

    return(
      <div className="Container Question row">
        <Link to={`/organizer/${id}`} className="col-lg-11">{name}</Link>
        <button onClick={this.handleDeleteOrganizer}><i className="fa fa-trash" /></button>
      </div>
    )
  }
}

export default OrganizerCard;
