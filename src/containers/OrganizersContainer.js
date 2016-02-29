import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import OrganizerCard from '../components/OrganizerCard';
import OrganizerForm from '../components/OrganizerForm';

import {getOrganizers, newOrganizer, deleteOrganizer} from '../actions/OrganizerActions';

@connect(state => ({
  organizers: state.organizers.organizers,
  isCreatingOrganizer: state.organizers.isCreatingOrganizer,
  new: state.organizers.new
}), {
  getOrganizers,
  newOrganizer
})
class OrganizersContainer extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.new != this.props.new) {
      const nextPath = this.context.location.query.next || `/organizer/${nextProps.new}`;
      this.context.history.pushState(null, nextPath);
    }
  }

  componentWillMount() {
    this.props.getOrganizers();
  }

  handleNewOrganizer = (name) => {
    this.props.newOrganizer(name);
  }

  render() {

    const {organizers} = this.props;
    const deleteThis = this.handleDeleteOrganizer;

    return(
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div className="row">
          <h1>
            Organizers
          </h1>
          <OrganizerForm handleNewOrganizer={this.handleNewOrganizer}/>
          {
            organizers.reverse().map(organizer =>
              <OrganizerCard name={organizer.name} id={organizer._id} handleDeleteOrganizer={deleteThis}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default OrganizersContainer;
