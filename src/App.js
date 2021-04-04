import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import {Provider} from "./Context";
import {deserts, drinks, mains, starters, sides} from "./data";

import "./styles.css";

export default function App() {
  return (
      <Provider>
        <div className="menu">
          <Logo/>
          <div className="right">
            <Mains type="Starters" meals={starters}/>
            <Mains type="Main" meals={mains}/>
            <Mains type="Desserts" meals={deserts}/>
          </div>
          <div className="left">
            <aside className="aside">
              <Extras type="Sides" items={sides}/>
              <Extras type="Drinks" items={drinks}/>
            </aside>
          </div>

        </div>
      </Provider>
  );
}
