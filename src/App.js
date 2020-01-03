import React,{Component} from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import './Main.css'
import Home from './components/home'
import SelectT from './components/selectt'
import Survey from './components/survey'
import Result from './components/result'
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
    <Route path='/SelectTemplate' component={SelectT}/>
  <Route path='/Survey' component={Survey}/>
    <Route path='/Result' component={Result}/>
    <Route path='/ContactUs' component={ContactUs}/>
   <Route path='/Aboutus' component={Aboutus}/>
   <Route path='/ContactUs' component={ContactUs}/>}/>
   </Switch>
   </div>
   </BrowserRouter>
   )}}
