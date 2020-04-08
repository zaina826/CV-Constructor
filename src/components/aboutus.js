import React, { Component } from "react";
import fire from "./database";
import sobhi from "./sobhi.jpg";
import zaina from "./zaina.jpg";
export default class Aboutus extends Component {
  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged");
      } else {
        window.location.href = "./login";
      }
    });
  }
  render() {
    return (
      <div className="App-header">
        <p>About us</p>
        <div className="about_dev">
          <div className="person">
            <img className="dev_logo" src={sobhi} />
            <br />
            <p className="dev_name">Sobhi Ashraf</p>
            <a href="/template4/IC2AcTfZFaaMQXWk4xPzym4rg3I3/-M4O__hsXXeOCvo-5DzX" className="button_a">
              See profile
            </a>
            <br />
          </div>
          <br />
          <div className="person">
            <img className="dev_logo" src={zaina} />
            <br />
            <p>Zaina Abu Shaaban</p>
            <button className="button_a">See profile</button>
          </div>
        </div>
      </div>
    );
  }
}
