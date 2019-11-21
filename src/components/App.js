import React from "react";
import Login from "./Login/Login";
import UsersProfile from "./UsersProfile/UsersProfile";
import CreateProject from "./CreateProject/CreateProject";
// import Register from './Register/Register'

const App = () => {
  return (
    <div>
      <p>Projekt</p>
      <Login />
      <UsersProfile />
      <CreateProject />
      {/* <Register /> */}
    </div>
  );
};

export default App;
