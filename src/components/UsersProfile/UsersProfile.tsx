import React, { Component } from "react";
import { connect } from "react-redux";
// import { startLogout } from "../../store/actions/auth";
import { AppState } from "../../store/index.d";
import { Dispatch } from "redux";
import { AuthActionTypes } from "../../store/actions/actiontypes";
import { auth } from "../../firebase/firebase";
// interface UsersProfileProps {
// startLogout: () => void;
// }

class UsersProfile extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  startLogout = () => {
    auth.signOut()
  }
  render() {
    return (
      <>
        <button onClick={this.startLogout} className="ui button">
          Logout
        </button>
        {/* <button onClick={this.props.startLogout} className="ui button">
          Logout
        </button> */}
        <label htmlFor="">Your avatar (picture on click)</label>
        <br />
        <input type="text" placeholder="Update avatar" />
        <br />
        <label htmlFor="">Your nickname (input)</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Where are you from? (input)</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">
          What programming languages are you using? (select)
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Tell us a few words about yourself. (input)</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">
          How much time will you spend on programming every week? (to choose -
          less than 5h - 5-10 - 11-15 - 16-25 - 26+ ){" "}
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">
          How long are you programming? (to choose - 1-3months - 4-6 - 7 - 11 -
          12+ )
        </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">How old are you? (input or your birth date) </label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Link to your github (If you have) (input)</label>
        <br />
        <input type="text" />
        <br />
        <label htmlFor="">Contact to you (input)</label>
        <br />
        <input type="text" />
        <br />
        <button>Save</button>
      </>
    );
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<AuthActionTypes>) => ({
// startLogout: () => dispatch(startLogout())
// });

export default UsersProfile;
