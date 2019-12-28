import React,{Component} from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import './Main.css'
import Home from './components/home'
import Aboutus from './components/aboutus'
import ContactUs from './components/contact'
import Navbar from './components/navbar'
export default class MainPage extends Component{
  render(){
   return(
   <BrowserRouter>
   <div>
   <Navbar/>
   <Switch>
   <Route path='/' component={Home} exact />
   <Route path='/Aboutus' component={Aboutus}/>
   <Route path='/ContactUs' component={ContactUs}/>}/>
   </Switch>
   </div>
   </BrowserRouter>
   );

}}
