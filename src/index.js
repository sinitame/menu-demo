import React from "react";
import ReactDOM from "react-dom";
import {config} from "./data";

import App from "./App";

const rootElement = document.getElementById("root");

// Setup colors according to config in data
document.documentElement.style.setProperty('--primary',config.primaryColor);
document.documentElement.style.setProperty('--secondary',config.secondaryColor);
document.documentElement.style.setProperty('--light',config.lightColor);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
