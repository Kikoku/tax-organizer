import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import QuestionContainer from './QuestionContainer';
import QuestionForm from '../components/QuestionForm';
import Button from '../components/Button';

import {deleteSection, updateSection} from '../actions/OrganizerActions';

@connect((state, ownProps) => ({
  organizer: state.organizers.organizer,
}), {
  deleteSection,
  updateSection
})
class SectionContainer extends Component {

  handleDelete = () => {
    this.props.deleteSection(this.props.organizer._id, this.props._id);
  }

  handleUpdate = (input) => {

    let section = this.props.organizer.sections.filter(section => section._id === this.props._id)[0];

    section.questions.push(input);

    this.props.updateSection(this.props.organizer._id, section);

  }

  renderQuestion(input) {

    const { _id } = this.props;

    if(input) {
      return(
        <div className="Question col-lg-12">
        <QuestionForm handleUpdate={this.handleUpdate}/>
          <ReactCSSTransitionGroup transitionName="example">
            {input.map(question =>
              <QuestionContainer
                _id={question._id}
                name={question.name}
                inputType={question.inputType}
                options={question.options}
                sectionId={_id}
              />
            )}
          </ReactCSSTransitionGroup>
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
