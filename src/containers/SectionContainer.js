import React, {Component, PropTypes} from 'react';
import QuestionContainer from './QuestionContainer'

class SectionContainer extends Component {

  renderQuestion(input) {
    if(input) {
      return(
        input.map(question =>
          <QuestionContainer
            name={question.name}
            inputType={question.inputType}
            options={question.options}
          />
        )
      )
    }
  }

  render() {

    const {name, questions} = this.props;

    return (
      <div className="col-xs-10 col-xs-offset-1 col-lg-8 col-lg-offset-2 SectionContainer">
        <h2>
          {name}
        </h2>
        {this.renderQuestion(questions)}
      </div>
    );
  }
}

export default SectionContainer;
