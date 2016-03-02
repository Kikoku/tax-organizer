import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

@connect(state => ({
  organizer: state.organizers.organizer
}), {

})
class QuestionForm extends Component {

  state = {
    name: '',
    inputType: 'text'
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state);
    this.setState({
      name: '',
      inputType: 'text'
    })
  }

  render() {

    const {name} = this.state;

    return (
      <form className="" onSubmit={this.handleSubmit}>
        <div className="col-lg-12">
          <input
            type="text"
            name="name"
            placeholder="New Question"
            onChange={this.handleChange}
            value={name}
            required
          />
        </div>
        <div className="col-lg-9">
          <select onChange={this.handleChange} name="inputType">
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
            <option value="select">Select Menu</option>
            <option value="radio">Radio Button</option>
          </select>
        </div>
        <div className="col-lg-3">
          <input
            type="submit"
            value="Create New Question"
          />
        </div>
      </form>
    );
  }
}

export default QuestionForm;
