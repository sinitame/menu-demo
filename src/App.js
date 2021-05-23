import React, {Component} from "react";
import {Provider} from "./Context.jsx";
import MediaCard from "./components/Card.jsx";
import {Modal} from "./components/Modal.jsx";
import Logo from "./components/Logo.jsx";
import Mains from "./components/MainsSection.jsx";
import ExtraSection from "./components/ExtraSection.jsx";

import "./styles.css";

function Menu({clickHandler, data_path}) {
  let data = require(`./data/${data_path}/data.json`)

  // Set menu colors from config
  let config = require(`./data/${data_path}/config.json`)
  document.documentElement.style.setProperty('--primary',config.primaryColor)
  document.documentElement.style.setProperty('--secondary',config.secondaryColor)
  document.documentElement.style.setProperty('--light',config.lightColor)
  return (
      <Provider>
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
      </Provider>
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
          <Modal show={this.state.show} bg_img_path={this.state.img}>
            <MediaCard handleClose={this.hideModal} img_path={this.state.img}
                       name={this.state.name} description={this.state.description}/>
          </Modal>
          <Menu clickHandler={this.showModal} data_path={this.props.data_path}/>
        </div>

    );
  }
}

export default App
