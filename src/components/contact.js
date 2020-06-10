import React, { Component } from "react";
import "./main.css";
import fire from "./database";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ContactUs PAGE</h1>
          <h3>Zaina Schaban</h3>

          <a className="FooterObj">zainaschaban@gmail.com</a>
          <h3>Sobhi Ashraf </h3>

          <a className="FooterObj">subhi.ashraf912@gmail.com</a>
        </header>
      </div>
    );
  }
}
export default ContactUs;
