import React, { Component } from "react";
import "./selectt.css";
import { template1_logo } from "../templates_images/template1.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class SelectT extends Component {
  render() {
    return (
      <div>
        <h1 className="Class1"> Step 1</h1>
        <a href="/survey/:template1">
          <img className="temp_img" src={template1_logo} />{" "}
        </a>
      </div>
    );
  }
}
