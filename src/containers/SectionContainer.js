import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import QuestionContainer from './QuestionContainer';
import Button from '../components/Button';

import {deleteSection} from '../actions/OrganizerActions';

@connect(state => ({
  organizer: state.organizers.organizer
}), {
  deleteSection
})
class SectionContainer extends Component {

  handleDelete = () => {
    this.props.deleteSection(this.props.organizer._id, this.props._id);
  }

  renderQuestion(input) {
    if(input) {
      return(
        <div className="Question col-lg-12">
          {input.map(question =>
            <QuestionContainer
              name={question.name}
              inputType={question.inputType}
              options={question.options}
            />
          )}
        </div>
      )
    }
  }

  render() {

    const {name, questions} = this.props;

    return (
      <div className="Container row">
        <h2 className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          {name}
        </h2>
        <Button className="Delete" onClick={this.handleDelete}>
          <h2>
            <i className="fa fa-trash" />
          </h2>
        </Button>
        {this.renderQuestion(questions)}
      </div>
    );
  }
}

export default SectionContainer;
