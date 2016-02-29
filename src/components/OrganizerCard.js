import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {deleteOrganizer} from '../actions/OrganizerActions';

import EditOrganizerContainer from '../containers/OrganizerContainer';
import Button from '../components/Button';

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
        <Button onClick={this.handleDeleteOrganizer} className="Delete"><i className="fa fa-trash" /></Button>
      </div>
    )
  }
}

export default OrganizerCard;
