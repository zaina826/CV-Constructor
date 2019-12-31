import React, { Component } from "react";
import "../Main.css";
const Res = ({ match }) => (
  <div>
    <h3>ID: {match.params.name}</h3>
    <h3>ID: {match.params.middle}</h3>

    <h3>ID: {match.params.last}</h3>
    {/* <h3>ID: {match.params.last}</h3> */}
  </div>
);

export default Res;
