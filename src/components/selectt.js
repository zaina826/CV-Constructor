import React, { Component } from "react";
import "./main.css";
import logo from "./logo.png";
export default class SelectT extends Component {
     render() {
          return (
               <div className="App">
                    <header className="App-header">
                         <img src={logo} className="App-logo" alt="logo" />
                         <h2>Sellect your template</h2>
                    </header>
               </div>
          );
     }
}
