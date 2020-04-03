import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import logo from "./logo.png";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar_e">
          <NavLink className="elmnts" to="/">
            <img src={logo} height="70" />
          </NavLink>
          <NavLink className="navbar_elmnts" to="/">
            Home
          </NavLink>
          <NavLink className="navbar_elmnts" to="/aboutus">
            Aboutus
          </NavLink>
          <NavLink className="navbar_elmnts" to="/contactus">
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}
