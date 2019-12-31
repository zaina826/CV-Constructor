import React, { Component } from "react";
import "./main.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
export default class Survey extends Component {
  state = { first: "", middle: "", last: "", finalPath: "" };
  handleFirst = e => {
    this.setState({
      first: e.target.value
    });
  };

  handelMiddle = e => {
    this.setState({
      middle: e.target.value
    });
  };
  handelLast = e => {
    console.log(e.target.value);
    this.getLink();
    this.setState({
      last: e.target.value
    });
    this.getLink();
  };

  getLink = () => {
    var firstName = this.state.first;
    var middleName = this.state.middle;
    var lastName = this.state.last;
    var fLink = "/res/" + firstName + "/" + middleName + "/" + lastName;
    this.setState({
      finalPath: fLink
    });
  };
  render() {
    return (
      <div>
        <p>Fill in the following survey</p>
        <h2>JUST FOR TESTING</h2>
        <input
          className="txtboxes"
          placeholder="Enter your First name"
          onChange={this.handleFirst}
          value={this.state.first}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Middle name"
          onChange={this.handelMiddle}
          value={this.state.middle}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Last name"
          onChange={this.handelLast}
          value={this.state.last}
        />
        <Link to={this.state.finalPath}>GO TO THE NEXT PAGE.</Link>
      </div>
    );
  }
}
