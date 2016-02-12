import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import EditSectionContainer from './EditSectionContainer';

class EditOrganizerContainer extends Component {

  render() {
    return (
      <div>
        EditOrganizerContainer
        <EditSectionContainer />
      </div>
    );
  }
}

export default EditOrganizerContainer;
