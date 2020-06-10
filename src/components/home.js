import React, { Component } from "react";
import logo from "./logo.png";
import "./main.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export default class Home extends Component {


  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Easily create an efficient and persuasive CV</h1>
          <p className="homepara">
            CV constructor is a web application that allows you to easily create a persuasive
            CV by selecting one of our five templates then editing it according to your information,
            then allows you to save it as an image.
          </p>
          <Link className="button_a" to="/SelectTemplate">
            Start proccess!
          </Link>
        </header>
      </div>
    );
  }
}
