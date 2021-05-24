
import React from "react";
import Logo from "../../common/Logo.jsx";
import MainSection from "./mains/MainsSection.jsx";
import ExtraSection from "./extras/ExtrasSection.jsx";

import './menu-layout.css';
import '../../../styles.css';

export default function MenuLayout({clickHandler, data_path}) {
    let data = require(`../../../data/${data_path}/data.json`)
  
    // Set menu colors from config
    let config = require(`../../../data/${data_path}/config.json`)
    document.documentElement.style.setProperty('--primary',config.primaryColor)
    document.documentElement.style.setProperty('--secondary',config.secondaryColor)
    document.documentElement.style.setProperty('--light',config.lightColor)
    return (
      <div className="menu">
        <Logo/>
        <div className="right">
          <MainSection type="Starters" meals={data.starters}
                clickHandler={clickHandler}/>
          <MainSection type="Main" meals={data.mains} clickHandler={clickHandler}/>
          <MainSection type="Desserts" meals={data.deserts}
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