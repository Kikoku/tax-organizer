import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import OrganizerCard from '../containers/OrganizerCard';

import {getOrganizers} from '../actions/OrganizerActions'

@connect(state => ({
  organizers: state.organizers.organizers
}), {
  getOrganizers
})
class OrganizersContainer extends Component {

  componentWillMount() {
    this.props.getOrganizers();
  }

  render() {

    const {organizers} = this.props;

    return(
      <div className="row">
        {
          organizers.map(organizer =>
            <OrganizerCard name={organizer.name} id={organizer._id}/>
          )
        }
      </div>
    )
  }
}

export default OrganizersContainer;
