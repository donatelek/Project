import React from "react";
import Login from "./Login/Login";
import UserProfile from "./UsersProfile/UsersProfile";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/user" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
