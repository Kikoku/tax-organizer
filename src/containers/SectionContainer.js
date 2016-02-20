import React, {Component, PropTypes} from 'react';
import QuestionContainer from './QuestionContainer'

class SectionContainer extends Component {

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
        <h2 className="col-lg-12">
          {name}
        </h2>
        {this.renderQuestion(questions)}
      </div>
    );
  }
}

export default SectionContainer;
