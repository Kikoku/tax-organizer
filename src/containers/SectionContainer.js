import React, {Component, PropTypes} from 'react';
import QuestionContainer from './QuestionContainer'
import EditButton from '../components/Button';

class SectionContainer extends Component {

  state = {
    editing: false
  }

  handleEditToggle = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  renderQuestion(input) {
    if(input) {
      return(
        <div className="Question col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
    const {editing} = this.state;

    return (
      <div className={`Container row ${this.state.editing ? 'Editing' : ''}`}>
        <h2 className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          {name}
        </h2>
        <EditButton toggle={editing} handleClick={this.handleEditToggle}>
          {
            editing
            ? 'Save'
            : 'Edit'
          }
        </EditButton>
        {this.renderQuestion(questions)}
      </div>
    );
  }
}

export default SectionContainer;
