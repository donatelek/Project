import React, { Component } from "react";
import { auth } from "../../firebase/firebase";

interface UsersProfileState {
  facebook: string;
  discord: string;
  github: string;
  slack: string;
}

class UsersProfile extends Component<UsersProfileState> {
  state = {
    facebook: '',
    discord: '',
    github: '',
    slack: '',
  };
  startLogout = () => {
    auth.signOut();
  };
  handleInputChange = (e: any): void => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    });
  }
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
        <h1>Contact</h1>
        <br />
        <label htmlFor="">Facebook URL</label>
        <br />
        <input name='facebook' type="text" onChange={this.handleInputChange} value={this.state.facebook} />
        <br />
        <label htmlFor="">Discord</label>
        <br />
        <input name='discord' type="text" onChange={this.handleInputChange} value={this.state.discord} />
        <br />
        <label htmlFor="">Github</label>
        <br />
        <input name='github' type="text" onChange={this.handleInputChange} value={this.state.github} />
        <br />
        <label htmlFor="">Slack</label>
        <br />
        <input name='slack' type="text" onChange={this.handleInputChange} value={this.state.slack} />
        <br />
        <input type="text" />
        <br />
        <button>Save</button>
      </>
    );
  }
}

export default UsersProfile;
