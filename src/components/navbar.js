import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
export default class Navbar extends Component {
     render() {
          return (
               <div className="Nav">
                    <NavLink className="Nav_links" to="/">
                         Home
                    </NavLink>
                    <NavLink className="Nav_links" to="/aboutus">
                         Aboutus
                    </NavLink>
                    <NavLink className="Nav_links" to="/contactus">
                         Contact
                    </NavLink>
               </div>
          );
     }
}
