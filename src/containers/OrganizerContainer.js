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
    if(input.sections) {
      return (
        input.sections.map(section =>
          <SectionContainer name={section.name} questions={section.questions}/>
        )
      )
    }
  }

  render() {

    const {organizer} = this.props;

    return (
      <div className="row">
        <div className="col-lg-12">
          <h1>
            {organizer.name}
          </h1>
        </div>
        {this.renderSections(organizer)}
      </div>
    );
  }
}

export default OrganizerContainer;
