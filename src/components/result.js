import React, { Component } from "react";
import "./main.css";
const Res = ({ match }) => (
  <div className="App-header">
    <h3>ID: {match.params.name}</h3>
    <h3>ID: {match.params.middle}</h3>

    <h3>ID: {match.params.last}</h3>
    {/* <h3>ID: {match.params.last}</h3> */}
  </div>
);

export default Res;
