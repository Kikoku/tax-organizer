import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getOrganizerById} from '../actions/OrganizerActions'

import EditSectionContainer from './EditSectionContainer';

@connect(state => ({
  organizer: state.organizers.organizer
}), {
  getOrganizerById
})
class EditOrganizerContainer extends Component {

  componentDidMount() {
    this.props.getOrganizerById('56bf6be17deda7de1037ca79');
  }

  render() {

    const {organizer} = this.props;

    console.log(organizer);

    return (
      <div>
        EditOrganizerContainer
        {organizer.sections.map(section =>
          <EditSectionContainer name={section.name} questions={section.questions}/>
        )}
      </div>
    );
  }
}

export default EditOrganizerContainer;
