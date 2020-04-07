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
import Survey from "./components/survey";
import Login from "./components/login";
import fire from "./components/database";
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
            <Route path="/login" component={Login} />
            <Route path="/dev/sobhi" component={Sobhi} />
            }/>
            <Route path="/template1/:key" component={Result1} />
            <Route className='FullHeight' path="/template2/:key" component={Result2} />
            <Route className='FullHeight' path="/template3/:key" component={Result3} />
            <Route className='FullHeight' path="/template4/:key" component={Result4} />


            <Route path="/selecttemplate" component={SelectT} />
            }/>
            <Route path="/survey/:template" component={Survey} />
            }/>
            }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
