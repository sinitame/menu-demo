import React from "react";
import Logo from "./components/Logo.jsx";
import Mains from "./components/MainsSection.jsx";
import ExtraSection from "./components/ExtraSection.jsx";

export default function Content({data_path, clickHandler}) {
  let data = require(`./data/${data_path}/data.json`)
  return (
      <div className="menu">
        <Logo/>
        <div className="right">
          <Mains type="Starters" meals={data.starters}
                 clickHandler={clickHandler}/>
          <Mains type="Main" meals={data.mains} clickHandler={clickHandler}/>
          <Mains type="Desserts" meals={data.deserts}
                 clickHandler={clickHandler}/>
        </div>
        <div className="left">
          <aside className="aside">
            <ExtraSection type="Sides" extras={data.sides}
                          clickHandler={clickHandler}/>
            <ExtraSection type="Drinks" extras={data.drinks}
                          clickHandler={clickHandler}/>
          </aside>
        </div>
      </div>
  );
}
