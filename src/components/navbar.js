import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends Component{
    render(){
        return(
          <div>
              <NavLink to ='/'>Home</NavLink>
              <NavLink to ='/aboutus'>Aboutus</NavLink>
              <NavLink to ='/contactus'>Contact</NavLink>
          </div>
        );
    }
} 