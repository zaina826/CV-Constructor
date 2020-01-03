import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import ContactUs from "./components/contact";
import Navbar from "./components/navbar";
import Result from "./components/result";
import SelectT from "./components/selectt";
import Survey from "./components/survey";
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
            }/>
            <Route path="/result" component={Result} />
            <Route path="/selecttemplate" component={SelectT} />
            }/>
            <Route path="/survey" component={Survey} />
            }/>
            <Route path="/res/:name/:middle/:last" component={Result} />
            }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
