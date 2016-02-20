import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import OrganizerCard from '../components/OrganizerCard';

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
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="row">
          <h1>
            Organizers
          </h1>
          {
            organizers.map(organizer =>
              <OrganizerCard name={organizer.name} id={organizer._id}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default OrganizersContainer;
