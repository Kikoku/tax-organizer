import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getOrganizerById} from '../actions/OrganizerActions'

import SectionContainer from './SectionContainer';
import SectionForm from '../components/SectionForm';

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
        <div>
        {input.sections.map(section =>
          <SectionContainer name={section.name} questions={section.questions} _id={section._id}/>
        )}
        <SectionForm />
        </div>
      )
    }
  }

  render() {

    const {organizer} = this.props;

    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <div>
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
