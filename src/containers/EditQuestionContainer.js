import React, {Component, PropTypes} from 'react';
import EditOptionsContainer from './EditOptionsContainer';

class EditQuestionContainer extends Component {

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.options.map(option =>
          <EditOptionsContainer name={option.name}/>
        )}
      </div>
    );
  }
}

export default EditQuestionContainer;
