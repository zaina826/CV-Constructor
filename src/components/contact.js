import React, { Component } from "react";
import "./main.css";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
class ContactUs extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contact us at</h1>
          <h2 className="button_a">zainaschaban@gmail.com</h2>
          <h1>Or:</h1>
          <h2 className="button_a">subhi.ashraf912@gmail.com</h2>

        </header>
      </div>
    );
  }
}
export default ContactUs;
