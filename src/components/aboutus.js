import React, { Component } from "react";
import fire from "./database";
import sobhi from "./sobhi.jpg";
import zaina from "./zaina.jpg";
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
            <a href="/sobhi" className="button_a">
              See profile
            </a>
            <br />
          </div>
          <br />
          <div className="person">
            <img className="dev_logo" src={zaina} />
            <br />
            <p>Zaina Abu Shaaban</p>
            <a href="/zaina" className="button_a">
              See profile
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}
