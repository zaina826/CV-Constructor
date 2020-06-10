import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import navlogo from "./navlogo.png"
export default class Navbar extends Component {

  render() {
    return (

      <div className="navbar">
        <img src={navlogo} className="navlogo" />
        <div className="navbar_e">
          <NavLink className="navbar_elmnts" to="/">
            Home
          </NavLink>
          <NavLink className="navbar_elmnts" to="/aboutus">
            About us
          </NavLink>
          <NavLink className="navbar_elmnts" to="/contactus">
            Contact us
          </NavLink>
        </div>

      </div>
    );
  }
}
