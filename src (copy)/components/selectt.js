import React, { Component } from "react";
import "./selectt.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./main.css";
import template1 from "./template1.jpg";
import template2 from "./template2.jpg";
import template3 from "./template3.jpg";
import template4 from "./template4.jpg";

export default class SelectT extends Component {
  render() {
    return (
      <div>
        <a href="/survey1">
          <img src={template1} height="300" width="500" className="templates" />
        </a>
        <a href="/survey2">
          <img src={template2} height="450" width="380" className="templates" />
        </a>
        <a href="/survey3">
          <img src={template3} height="320" width="500" className="templates" />
        </a>
        <a href="/survey4">
          <img src={template4} height="500" width="300" className="templates" />
        </a>
      </div>
    );
  }
}
