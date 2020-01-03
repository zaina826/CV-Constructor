import React, { Component } from "react";
import "./main.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ContactUs PAGE</h1>
          <input className="txtboxes" placeholder="Enter your name:" />
          <input
            type="Email"
            className="txtboxes"
            placeholder="Enter your Email:"
          />
          <textarea
            className="txtboxes_big"
            placeholder="Enter your Messege:"
          ></textarea>
          <button className="button_a">Send Messege.</button>
        </header>
      </div>
    );
  }
}
export default ContactUs;
