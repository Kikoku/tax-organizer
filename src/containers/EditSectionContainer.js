import React, {Component, PropTypes} from 'react';
import EditQuestionContainer from './EditQuestionContainer'

class EditSectionContainer extends Component {

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.questions.map(question =>
          <EditQuestionContainer name={question.name} options={question.options}/>
        )}
      </div>
    );
  }
}

export default EditSectionContainer;
