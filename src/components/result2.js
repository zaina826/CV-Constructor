import React, { Component } from "react";
import "./main.css";
const Res2 = ({ match }) => (
  <div className="App-header">
    <h3>Name: {match.params.Name}</h3>
    <h3>Phone Number: {match.params.PN}</h3>
    <h3>Gmail: {match.params.Gmail}</h3>
    <h3>Address: {match.params.Address}</h3>
    <h3>Linkdin: {match.params.In}</h3>
    <h3>Name of university: {match.params.NOU}</h3>
    <h3>Skills: {match.params.Skills}</h3>
    <h3>Profile: {match.params.Profile}</h3>
    <h3>Work experiance: {match.params.WE}</h3>
  </div>
);

export default Res2;
