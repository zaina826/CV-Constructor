import React, { Component } from "react";
import "./main.css";
import logo from "./logo.png";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export default class ContactUs extends Component {
     render() {
          return (
               <div className="App">
                    <header className="App-header">
                         <img src={logo} className="App-logo" alt="logo" />
                         <h4>Enter your name</h4>{" "}
                         <input
                              className="txtboxes"
                              placeholder="Enter your Name"
                         />
                         <input
                              className="txtboxes"
                              placeholder="Enter your Email"
                         />
                         <input
                              className="txtboxes_big"
                              placeholder="Enter your Messege"
                         />
                         <Link className="button_a">Send your messege</Link>
                    </header>
               </div>
          );
     }
}
