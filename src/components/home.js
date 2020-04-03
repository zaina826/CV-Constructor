import React, { Component } from "react";
import logo from "./logo.png";
import "./main.css";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <img className="App-logo" src={logo} />
          <h2 className="B">Easily create an efficient and persuasive CV</h2>
          <br />
          <br />
          <br /> <br /> <br />
          <Link className="A" to="/SelectTemplate">
            Start the proccess
          </Link>
        </body>
      </div>
    );
  }
}
