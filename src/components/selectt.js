import React, { Component } from "react";
import "./main.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import temp1pic from "./template1.png";
import temp2pic from "./template2.png";
import temp3pic from "./template3.png";
import temp4pic from "./template4.png";
import temp5pic from "./template5.png";

export default class SelectT extends Component {
  render() {
    return (
      <div className="App-header">
        <h1> Step 1: Choose a template..</h1>
        <div>
          <Link to="/survey/template1">
            <img className="template_logo" src={temp1pic} />
          </Link>
          <Link to="/survey/template4">
            <img className="template_logo" src={temp4pic} />
          </Link>

        </div>
        <div>

          <Link to="/survey/template3">
            <img className="template_logo" src={temp3pic} />
          </Link>
        </div>
        <div>
          <Link to="/survey/template2">
            <img className="template_logo" src={temp2pic} />
          </Link>
        </div>


        <div>
          <Link to="/survey/template5">
            <img className="template_logo" src={temp5pic} />
          </Link>
        </div>
      </div>
    );
  }
}
