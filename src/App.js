import React, {Component} from "react";
import {Provider} from "./Context";
import MediaCard from "./components/Card";
import {Modal} from "./components/Modal";
import "./styles.css";
import Content from "./Content";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";

function Menu({clickHandler}) {
  return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home/>}/>
            <Route path="/the-moonrise-dinner"
                   exact component={() =>
                <Content data_path="the-moonrise-dinner"
                         clickHandler={clickHandler}/>}/>
            <Route path="/another-dinner"
                   exact component={() =>
                <Content data_path="another-dinner"
                         clickHandler={clickHandler}/>}/>
          </Switch>
        </Router>
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
