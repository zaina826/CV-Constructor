import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Main.css";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import ContactUs from "./components/contact";
import Navbar from "./components/navbar";
import Result1 from "./components/result1";
import Result2 from "./components/result2";
import Result3 from "./components/result3";
import Result4 from "./components/result4";
import Result5 from './components/result5';
import SelectT from "./components/selectt";
import Zaina from "./zaina";
import Sobhi from "./components/sobhi";
export default class MainPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/Contactus" component={ContactUs} />
            <Route path="/result1" component={Result1} />
            <Route className='FullHeight' path="/result2" component={Result2} />
            <Route className='FullHeight' path="/result3" component={Result3} />
            <Route className='FullHeight' path="/result4" component={Result4} />
            <Route className='FullHeight' path="/result5" component={Result5} />
            <Route path="/selecttemplate" component={SelectT} />
            <Route path="/zaina" component={Zaina} />
            <Route path="/sobhi" component={Sobhi} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
