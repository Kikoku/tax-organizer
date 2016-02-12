import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault(e);
    console.log('submitting');
    this.props.handleLogin(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const {error, loading} = this.props;
    const {email, password} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email@example.com"
          onChange={this.handleChange}
          value={email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
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

export default LoginForm;
