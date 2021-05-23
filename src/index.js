import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import App from "./App";
import Home from "./Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home/>}/>
        <Route path="/the-moonrise-dinner"
          exact component={() => <App data_path="the-moonrise-dinner"/>}
        />
        <Route path="/another-dinner"
          exact component={() => <App data_path="another-dinner"/>}
      />
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
