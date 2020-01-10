import React, { Component } from "react";
import logo from "./logo.png";
import "../main.css";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} />
          <h1>Easily create an efficient and persuasive CV</h1>
          <Link className="button_a" to="/SelectTemplate">
            Start the proccess
          </Link>
        </header>
      </div>
    );
  }
}
