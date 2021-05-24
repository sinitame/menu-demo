import React, {Component} from "react";

import MediaCard from "./item-details/card/Card.jsx";
import ItemDetails from "./item-details/ItemDetails.jsx";
import MenuLayout from "./layout/MenuLayout.jsx";

import "../../styles.css";

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
        <MenuLayout clickHandler={this.showModal} data_path={this.props.data_path}/>
      </div>
    );
  }
}

export default App
