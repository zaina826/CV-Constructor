import React, { Component } from "react";
import sobhi from "./sobhi.png";
import zaina from "./zaina.png";
import "./main.css";
export default class Aboutus extends Component {
  render() {
    return (
      <div className="Contact-header">
        <div className="developers">
          <div className="contact-content">
            <img className="personal-logo" src={sobhi} />
            <h2>Sobhi Ashraf</h2>
            <button className="button_a"> See Profile</button>
          </div>
          <div className="contact-content">
            <img className="personal-logo" src={zaina} />
            <h2>Zaina Abu Shaban</h2>
            <button className="button_a">See profile</button>
          </div>
        </div>
      </div>
    );
  }
}
