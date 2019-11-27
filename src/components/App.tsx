import React from "react";
import Login from "./Login/Login";
import UserProfile from "./UsersProfile/UsersProfile";
import CreateProject from "./CreateProject/CreateProject";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ListOfProjects from './ListOfProjects/ListOfProjects'

export const history = createHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path='/create' component={CreateProject} />
            <Route path='/projects' component={ListOfProjects} />
            <PrivateRoute path="/user" component={UserProfile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
