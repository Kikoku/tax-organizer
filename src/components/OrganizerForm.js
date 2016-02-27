import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class OrganizerForm extends Component {

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
    this.props.handleNewOrganizer(this.state);
  }

  render() {

    const {name} = this.state;

    return (
      <form className="Container Question row" onSubmit={this.handleSubmit}>
        <div className="col-lg-12">
          <input
            type="text"
            name="name"
            placeholder="New Organizer"
            onChange={this.handleChange}
            value={name}
            required
          />
        </div>
        <div className="col-lg-12">
          <input
            type="submit"
            value="Create New Organizer"
          />
        </div>
      </form>
    );
  }
}

export default OrganizerForm;
