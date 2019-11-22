import React, { Component } from "react";
import { connect } from "react-redux";
import {
  userValidationLogin,
  userValidationRegister
} from "../../store/actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      servResponse: ""
    };
  }

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
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={this.onInputChange}
          value={this.state.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.onInputChange}
          value={this.state.password}
        />
        <div className="ui buttons">
          <button className="ui button" onClick={this.submitLogin}>
            Login
          </button>
          <div className="or"></div>
          <button className="ui positive button" onClick={this.submitRegister}>
            Register
          </button>
        </div>
        {this.props.user.data.length !== 0 ? <Redirect to="/user" /> : null}
        {this.state.servResponse && (
          <div className="error">{this.state.servResponse}</div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, {
  userValidationLogin,
  userValidationRegister
})(Login);
