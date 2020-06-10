import React, { Component } from "react";
import "./main.css";
import zainaimg from "./zaina.jpg";
export default class Zaina extends Component {
  render() {
    return (
      <div className="App-header">
        <img className="dev_logo" src={zainaimg} />
        <h4>Zaina Abu Shaban</h4>
        <hr className="line" />
        <div className="dev_data">
          <p className="aboutpar">
            16 years old, from Gaza
            <br />
            Skills: Graphic design, video production and programming.
            <br />
            Instagram:zaina826
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}
