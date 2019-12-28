import React, { Component } from "react";
import logo from "../logo.png";
import "./main.css";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
export default class Home extends Component {
     render() {
          return (
               <div className="App">
                    <header className="App-header">
                         <img src={logo} className="App-logo" alt="logo" />

                         <h1>CV Creator</h1>
                         <Link className="button_a" to="/SelectTemplate">
                              Start proccess!
                         </Link>
                    </header>
               </div>
          );
     }
}