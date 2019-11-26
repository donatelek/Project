import React from "react";
import Login from "./Login/Login";
import UserProfile from "./UsersProfile/UsersProfile";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route } from "react-router-dom";

export const history = createHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/user" exact component={UserProfile} />
        </div>
      </Router>
    </div>
  );
};

export default App;
