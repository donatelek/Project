import React, { Component } from "react";
import { auth } from "../../firebase/firebase";
import { db } from "../../firebase/firebase";
import { AppState } from "../../store/index.d";
import { connect } from "react-redux";

interface UsersProfileState {
  facebook: string;
  discord: string;
  github: string;
  slack: string;
  avatar: string;
  nick: string;
  country: string;
  about: string;
  // to change on array
  programmingLang: string;
  willSpendOnProg: string;
  spendOnProg: string;
  birthDate: string;
  uid: { uid: string };
}

class UsersProfile extends Component<UsersProfileState> {
  state = {
    avatar: "",
    nick: "",
    country: "",
    about: "",
    programmingLang: "",
    willSpendOnProg: "",
    spendOnProg: "",
    birthDate: "",
    facebook: "",
    discord: "",
    github: "",
    slack: ""
  };
  startLogout = () => {
    auth.signOut();
  };
  handleInputChange = (e: any): void => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  onSubmit = () => {
    const {
      avatar,
      nick,
      country,
      about,
      programmingLang,
      willSpendOnProg,
      spendOnProg,
      birthDate,
      facebook,
      discord,
      github,
      slack
    } = this.state;
    db.collection("users").add({
      avatar,
      nick,
      country,
      about,
      programmingLang,
      willSpendOnProg,
      spendOnProg,
      birthDate,
      facebook,
      discord,
      github,
      slack,
      uid: this.props.uid.uid
    });
  };
  render() {
    return (
      <>
        {console.log("tutaj", this.props.uid.uid)}
        <button onClick={this.startLogout} className="ui button">
          Logout
        </button>
        <label htmlFor="">Your avatar (picture on click)</label>
        <br />
        <input
          name="avatar"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Update avatar"
          value={this.state.avatar}
        />
        <br />
        <label htmlFor="">Your nickname (input)</label>
        <br />
        <input
          name="nick"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.nick}
        />
        <br />
        <label htmlFor="">Where are you from? (input)</label>
        <br />
        <input
          name="country"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.country}
        />
        <br />
        <label htmlFor="">
          What programming languages are you using? (select)
        </label>
        <br />
        <input
          name="programmingLang"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.programmingLang}
        />
        <br />
        <label htmlFor="">Tell us a few words about yourself. (input)</label>
        <br />
        <input
          name="about"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.about}
        />
        <br />
        <label htmlFor="">
          How much time will you spend on programming every week? (to choose -
          less than 5h - 5-10 - 11-15 - 16-25 - 26+ ){" "}
        </label>
        <br />
        <input
          name="willSpendOnProg"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.willSpendOnProg}
        />
        <br />
        <label htmlFor="">
          How long are you programming? (to choose - 1-3months - 4-6 - 7 - 11 -
          12+ )
        </label>
        <br />
        <input
          name="spendOnProg"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.spendOnProg}
        />
        <br />
        <label htmlFor="">How old are you? (input or your birth date) </label>
        <br />
        <input
          name="birthDate"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.birthDate}
        />
        <br />
        <h1>Contact</h1>
        <br />
        <label htmlFor="">Facebook URL</label>
        <br />
        <input
          name="facebook"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.facebook}
        />
        <br />
        <label htmlFor="">Discord</label>
        <br />
        <input
          name="discord"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.discord}
        />
        <br />
        <label htmlFor="">Github</label>
        <br />
        <input
          name="github"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.github}
        />
        <br />
        <label htmlFor="">Slack</label>
        <br />
        <input
          name="slack"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.slack}
        />
        <br />
        <button onClick={this.onSubmit}>Save</button>
      </>
    );
  }
}

interface StateFromProps {
  authReducer: {
    uid: {};
  };
}

const mapStateToProps = (state: StateFromProps) => {
  return {
    uid: state.authReducer.uid
  };
};

export default connect(mapStateToProps, null)(UsersProfile);
