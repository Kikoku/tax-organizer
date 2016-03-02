import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import OptionsContainer from './OptionsContainer';

import Button from '../components/Button';

import {updateSection} from '../actions/OrganizerActions';

@connect((state, ownProps) => ({
  organizer: state.organizers.organizer,
}), {
  updateSection
})
class QuestionContainer extends Component {

  handleDelete = () => {

    let section = this.props.organizer.sections.filter(section => section._id === this.props.sectionId)[0];

    section.questions = section.questions.filter(question => question._id != this.props._id);

    this.props.updateSection(this.props.organizer._id, section);

  }

  renderTextInput() {
    return (
      <div>
        <input type='text'/>
      </div>
    )
  }

  renderTextArea() {
    return (
      <textarea />
    )
  }

  renderOptions() {
    if(this.props.options) {
      return (
        <OptionsContainer options={this.props.options} inputType={this.props.inputType} />
      )
    }
  }

  renderQuestion() {
    switch(this.props.inputType) {
      case 'text':
        return this.renderTextInput();
      case 'textarea':
        return this.renderTextArea();
      default:
        return this.renderOptions();
    }
  }

  render() {

    return (
      <div className="col-lg-12">
        <label className="col-lg-10">
          {this.props.name}
        </label>
        <Button className="Delete" onClick={this.handleDelete}>
            <i className="fa fa-trash" />
        </Button>
        {this.renderQuestion()}
      </div>
    );
  }
}

export default QuestionContainer;
