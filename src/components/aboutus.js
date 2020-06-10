import React, { Component } from "react";
import sobhi from "./sobhi.jpg";
import zaina from "./zaina.jpg";
import ".//main.css"
export default class Aboutus extends Component {
  render() {
    return (
      <div className="App-header">
        <p>About us</p>
        <div className="about_dev">
          <div className="person">
            <img className="dev_logo" src={sobhi} />
            <br />
            <p className="dev_name">Sobhi Ashraf</p>
            <a className="button_a" href="./sobhi">
              See profile
            </a>
            <br />
          </div>
          <br />
          <div className="person">
            <img className="dev_logo" src={zaina} />
            <br />
            <p>Zaina Abu Shaban</p>
            <a className="button_a" href="./zaina">See profile</a>
          </div>
        </div>
      </div>
    );
  }
}
