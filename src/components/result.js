import React, { Component } from "react";
import "./main.css";
const Res = ({ match }) => (
  <div className="App-header">
    <h3>First Name is: {match.params.name}</h3>
    <h3>Middle Name is: {match.params.middle}</h3>

    <h3>LastName: {match.params.last}</h3>
  </div>
);

export default Res;
