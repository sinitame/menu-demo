import React, { Component } from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import { Provider } from "./Context";
import { mains, sides, drinks } from "./data";
import MediaCard from "./components/Card";
import {Modal} from "./components/Modal";

import "./styles.css";

function Menu({clickHandler}) {
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={mains} clickHandler={clickHandler}/>
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
      </div>
    </Provider>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      name: "",
      description: "",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (name, description) => {
    this.setState({ show: true, name, description });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show}>
          <MediaCard handleClose={this.hideModal} name={this.state.name} description={this.state.description}/>
        </Modal>
        <Menu clickHandler={this.showModal}/>
      </div>

    );
  }
}

export default App
