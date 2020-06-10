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
import SelectT from "./components/selectt";
import fire from "./components/database";
import Sobhi from "./components/sobhi";
import Zaina from "./components/zaina";
// import Sobhi from "./components/sobhi";
import LatestCvs from "./components/MyLatestCvs";

export default class MainPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/sobhi" component={Sobhi} />
            <Route path="/zaina" component={Zaina} />
            <Route path="/Contactus" component={ContactUs} />
            <Route path="/MyCvs" component={LatestCvs} />
            <Route path="/template1" component={Result1} />
            <Route
              className="FullHeight"
              path="/template2"
              component={Result2}
            />
            <Route
              className="FullHeight"
              path="/template3"
              component={Result3}
            />
            <Route
              className="FullHeight"
              path="/template4"
              component={Result4}
            />
            <Route path="/selecttemplate" component={SelectT} />
            }/> }/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
