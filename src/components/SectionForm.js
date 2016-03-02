import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {updateSection} from '../actions/OrganizerActions';

@connect(state => ({
  organizer: state.organizers.organizer
}), {
  updateSection
})
class SectionForm extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateSection(this.props.organizer._id, {id: false, name: this.state.name});
    this.setState({
      name: ''
    })
  }

  render() {

    const {name} = this.state;

    return (
      <form className="Container Question row" onSubmit={this.handleSubmit}>
        <div className="col-lg-12">
          <input
            type="text"
            name="name"
            placeholder="New Section"
            onChange={this.handleChange}
            value={name}
            required
          />
        </div>
        <div className="col-lg-12">
          <input
            type="submit"
            value="Create New Section"
          />
        </div>
      </form>
    );
  }
}

export default SectionForm;
