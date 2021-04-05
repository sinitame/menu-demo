import React, {Component} from "react";
import Logo from "./components/Logo";
import Mains from "./components/MainsSection";
import MediaCard from "./components/Card";
import {Modal} from "./components/Modal";
import {Provider} from "./Context";
import {deserts, drinks, mains, sides, starters} from "./data";

import "./styles.css";
import ExtraSection from "./components/ExtraSection";

function Menu({clickHandler}) {
  return (
      <Provider>
        <div className="menu">
          <Logo/>
          <div className="right">
            <Mains type="Starters" meals={starters}
                   clickHandler={clickHandler}/>
            <Mains type="Main" meals={mains} clickHandler={clickHandler}/>
            <Mains type="Desserts" meals={deserts} clickHandler={clickHandler}/>
          </div>
          <div className="left">
            <aside className="aside">
              <ExtraSection type="Sides" extras={sides}
                            clickHandler={clickHandler}/>
              <ExtraSection type="Drinks" extras={drinks}
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
                       name={this.state.name}
                       description={this.state.description}/>
          </Modal>
          <Menu clickHandler={this.showModal}/>
        </div>

    );
  }
}

export default App
