import React from "react";
import Header from "./Header";
import ShowUser from "./ShowUser";
import { createBrowserHistory as createHistory } from "history";
import { Router, Route } from "react-router-dom";

export const history = createHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={Header} />
          <Route path="/user" exact component={ShowUser} />
        </div>
      </Router>
    </div>
  );
};

export default App;
