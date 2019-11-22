import React from "react";
import Header from "./Header";
import ShowUser from "./ShowUser";
// import Login from "./Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
// import CreateProject from "./CreateProject/CreateProject";
// import Register from './Register/Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Header} />
          <Route path="/user" exact component={ShowUser} />
        </div>
      </BrowserRouter>
      {/* <Register /> */}
    </div>
  );
};

export default App;
