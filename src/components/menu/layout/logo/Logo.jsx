import React from "react";

import "./logo.css";

export default function Logo({logo}) {
  return (
    <img src={logo} className="logo-image"></img>
  );
}
