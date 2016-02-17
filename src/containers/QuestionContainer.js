import React, {Component, PropTypes} from 'react';
import OptionsContainer from './OptionsContainer';

class QuestionContainer extends Component {

  renderTextInput() {
    return (
      <input type='text'/>
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
      <div>
        <label>
          {this.props.name}
        </label>
        {this.renderQuestion()}
      </div>
    );
  }
}

export default QuestionContainer;
