import React,{Component} from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import './Main.css'
import Home from './components/home'
import SelectT from './components/selectt'
import Survey from './components/survey'
import Result from './components/result'
import ContactUs from './components/contact'
import Error from './components/error'
export default class MainPage extends Component{
  render(){
   return(
    <BrowserRouter>
       <Route path='/' component={Home} exact />
       <Route path='/SelectTemplate' component={SelectT}/>
       <Route path='/Survey' component={Survey}/>
       <Route path='/Result' component={Result}/>
       <Route path='/ContactUs' component={ContactUs}/>
       <Route component={Error}/>
    </BrowserRouter>
   );

}}
