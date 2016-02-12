import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault(e);
    this.props.handleSignup(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {error, loading} = this.props;
    const {name, email, password} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={this.handleChange}
          value={name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          onChange={this.handleChange}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (8+ characters)"
          onChange={this.handleChange}
          value={password}
          required
        />
        <input
          type="submit"
          value="Signup"
        />
      </form>
    );
  }
}

export default SignupForm;
