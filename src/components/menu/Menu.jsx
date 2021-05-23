import React, {Component} from "react";
import MediaCard from "./item-details/card/Card.jsx";
import ItemDetails from "./item-details/ItemDetails.jsx";
import Logo from "../common/Logo.jsx";
import Mains from "./sections/MainsSection.jsx";
import ExtraSection from "./sections/ExtraSection.jsx";

import "../../styles.css";

function Menu({clickHandler, data_path}) {
  let data = require(`../../data/${data_path}/data.json`)

  // Set menu colors from config
  let config = require(`../../data/${data_path}/config.json`)
  document.documentElement.style.setProperty('--primary',config.primaryColor)
  document.documentElement.style.setProperty('--secondary',config.secondaryColor)
  document.documentElement.style.setProperty('--light',config.lightColor)
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      img: "",
      name: "",
      description: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (img, name, description) => {
    this.setState({show: true, img, name, description});
  };

  hideModal = () => {
    this.setState({show: false});
  };

  render() {
    return (
        <div>
          <ItemDetails show={this.state.show} bg_img_path={this.state.img}>
            <MediaCard handleClose={this.hideModal} img_path={this.state.img}
                       name={this.state.name} description={this.state.description}/>
          </ItemDetails>
          <Menu clickHandler={this.showModal} data_path={this.props.data_path}/>
        </div>

    );
  }
}

export default App
