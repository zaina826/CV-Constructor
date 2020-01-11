import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import Home from "./components/home";
import Aboutus from "./components/aboutus";
import ContactUs from "./components/contact";
import Navbar from "./components/navbar";
import Res1 from "./components/result1";
import Res2 from "./components/result2";
import Res3 from "./components/result3";
import Res4 from "./components/result4";
import SelectT from "./components/selectt";
import Survey from "./components/survey";
import Survey1 from "./components/survey1";
import Survey2 from "./components/survey2";
import Survey3 from "./components/survey3";
import Survey4 from "./components/survey4";
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
            }/>
            <Route path="/result1/:key" component={Res1} />
            <Route path="/result2" component={Res2} />
            <Route path="/result3/:key" component={Res3} />
            <Route path="/result4/:key" component={Res4} />
            <Route path="/selecttemplate" component={SelectT} />
            }/>
            <Route path="/survey" component={Survey} />
            }/>
            <Route path="/survey1" component={Survey1} />
            <Route path="/dev/sobhi" component={Sobhi} />
            <Route path="/survey2" component={Survey2} />
            <Route path="/survey3" component={Survey3} />
            <Route path="/survey4" component={Survey4} />
            }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
