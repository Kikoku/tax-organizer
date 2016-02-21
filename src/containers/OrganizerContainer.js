import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getOrganizerById} from '../actions/OrganizerActions'

import SectionContainer from './SectionContainer';

@connect(state => ({
  organizer: state.organizers.organizer
}), {
  getOrganizerById
})
class OrganizerContainer extends Component {

  componentWillMount() {
    this.props.getOrganizerById(this.props.id);
  }

  renderSections(input) {

    let editing = false;

    if(input.sections) {
      return (
        input.sections.map(section =>
          <SectionContainer name={section.name} questions={section.questions} />
        )
      )
    }
  }

  render() {

    const {organizer} = this.props;

    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <h1 className="row">
          {organizer.name}
        </h1>
        {this.renderSections(organizer)}
      </div>
    );
  }
}

export default OrganizerContainer;
