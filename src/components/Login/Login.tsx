import React, { Component } from "react";
import { connect } from "react-redux";
import {
  startLogin,
  customRegister,
  startLogout,
  customLogin
} from "../../store/actions/auth";
import { AppState } from "../../store/index.d";
import { Dispatch } from "redux";
import { AuthActionTypes } from "../../store/actions/actiontypes";

interface LoginState {
  email: string;
  password: string;
  servResponse: string;
}

interface LoginProps {
  customRegister: (email: string, password: string) => void;
  startLogin: () => void;
  startLogout: () => void;
  customLogin: (email: string, password: string) => void;
}

class Login extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      password: "",
      servResponse: ""
    };
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  submitLogin = () => {
    const { email, password } = this.state;
    this.props.customLogin(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };
  submitRegister = () => {
    const { email, password } = this.state;
    this.props.customRegister(email, password);
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
          <button onClick={this.props.startLogout} className="ui button">
            Logout
          </button>
          <button onClick={this.props.startLogin} className="ui button">
            Log With Google
          </button>
        </div>
        {/* {this.props.user.data.length !== 0 ? <Redirect to="/user" /> : null} */}
        {this.state.servResponse && (
          <div className="error">{this.state.servResponse}</div>
        )}
      </>
    );
  }
}

// const mapStateToProps = (state: AppState) => {
//   console.log(state);
//   return {
//     user: state.userReducer
//   };
// };

const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
  startLogin: () => dispatch(startLogin()),
  customRegister: (email: string, password: string) =>
    dispatch(customRegister(email, password)),
  customLogin: (email: string, password: string) =>
    dispatch(customLogin(email, password)),
  startLogout: () => dispatch(startLogout())
});

export default connect<AppState>(null, mapDispatchToProps)(Login);
