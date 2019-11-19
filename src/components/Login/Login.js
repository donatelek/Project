import React, { Component } from "react";
import { connect } from "react-redux";
import {
  userValidationLogin,
  userValidationRegister
} from "../../store/actions";

class Login extends Component {
  state = {
    email: "",
    password: "",
    servResponse: ""
  };

  onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  submitLogin = () => {
    const { email, password } = this.state;
    this.props.userValidationLogin(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };
  submitRegister = () => {
    const { email, password } = this.state;
    this.props.userValidationRegister(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <label htmlFor="">Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={this.onInputChange}
          value={this.state.email}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={this.onInputChange}
          value={this.state.password}
        />
        <br />
        <div class="ui buttons">
          <button class="ui button" onClick={this.submitLogin}>
            Login
          </button>
          <div class="or"></div>
          <button class="ui positive button" onClick={this.submitRegister}>
            Register
          </button>
        </div>
        <br />
        {this.state.servResponse && (
          <div className="error">{this.state.servResponse}</div>
        )}
      </>
    );
  }
}

export default connect(null, {
  userValidationLogin,
  userValidationRegister
})(Login);
