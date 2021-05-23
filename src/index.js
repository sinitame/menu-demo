import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Menu from "./components/menu/Menu";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/the-moonrise-dinner"
          exact component={() => <Menu data_path="the-moonrise-dinner"/>}
        />
        <Route path="/another-dinner"
          exact component={() => <Menu data_path="another-dinner"/>}
      />
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
