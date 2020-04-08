import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import fire from "./database";
export default class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar_e">
          <NavLink className="navbar_elmnts" to="/">
            Home
          </NavLink>
          <NavLink className="navbar_elmnts" to="/aboutus">
            Aboutus
          </NavLink>
          <NavLink className="navbar_elmnts" to="/contactus">
            Contact
          </NavLink>
          <NavLink className="navbar_elmnts" to="/MyCvs">
            My Latest cvs
          </NavLink>
        </div>
      </div>
    );
  }
}
