import React from "react";
import Login from "./Login/Login";
import UserProfile from "./UsersProfile/UsersProfile";
import CreateProject from "./CreateProject/CreateProject";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route } from "react-router-dom";
import ListOfProjects from './ListOfProjects/ListOfProjects'
export const history = createHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/user" exact component={UserProfile} />
          <Route path="/create" exact component={CreateProject} />
          <Route path="/projects" exact component={ListOfProjects} />
        </div>
      </Router>
    </div>
  );
};

export default App;
