import React, { Component } from "react";
import { auth } from "../../firebase/firebase";

class UsersProfile extends Component {
  constructor(props: UsersProfile) {
    super(props);
    this.state = {};
  }
  startLogout = () => {
    auth.signOut();
  };
  render() {
    return (
      <>
        <button onClick={this.startLogout} className="ui button">
          Logout
        </button>
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

export default UsersProfile;
