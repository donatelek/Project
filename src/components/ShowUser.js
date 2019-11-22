import React, { Component } from "react";
import UsersProfile from "./UsersProfile/UsersProfile";

class ShowUser extends Component {
  render() {
    return (
      <div>
        <p>
          <UsersProfile />
        </p>
      </div>
    );
  }
}

export default ShowUser;
