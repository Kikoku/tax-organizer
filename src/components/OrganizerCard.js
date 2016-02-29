import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import EditOrganizerContainer from '../containers/OrganizerContainer';
import {Link} from 'react-router';

import {deleteOrganizer} from '../actions/OrganizerActions';

@connect(state => ({

}), {
  deleteOrganizer
})
class OrganizerCard extends Component {

  handleDeleteOrganizer = () => {
    this.props.deleteOrganizer(this.props.id);
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
