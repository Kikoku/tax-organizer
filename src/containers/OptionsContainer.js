import React, {Component, PropTypes} from 'react';

class OptionsContainer extends Component {

  renderCheckBox() {
    return(
      this.props.options.map(option =>
        <div>
          <input type="checkbox" value={option.value} name={option.name}/> {option.name}
        </div>
      )
    )
  }

  renderSelect() {
    return(
      <select>
        {this.props.options.map(option =>
          <option value={option.value}>{option.name}</option>
        )}
      </select>
    )
  }

  renderRadio() {
    return(
      this.props.options.map(option =>
        <div>
          <input type="radio" value={option.name} name="radio"/> {option.name}
        </div>
      )
    )
  }

  renderOptions() {
    switch(this.props.inputType) {
      case 'checkbox':
        return this.renderCheckBox();
      case 'select':
        return this.renderSelect();
      case 'radio':
        return this.renderRadio();
    }
  }

  render() {
    return (
      <div>
        {this.renderOptions()}
      </div>
    );
  }
}

export default OptionsContainer;
