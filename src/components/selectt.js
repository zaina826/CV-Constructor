import React, { Component } from "react";
import "./main.css";
import logo from "./logo.png";
import * as firebase from "firebase";
export default class SelectT extends Component {
     render() {
          const config = {
               apiKey: "AIzaSyDCl8yA5YkZfTKc2XgFd9ALJQzBrx2bVsI",
               authDomain: "cv-project-5c460.firebaseapp.com",
               databaseURL: "https://cv-project-5c460.firebaseio.com",
               projectId: "cv-project-5c460",
               storageBucket: "cv-project-5c460.appspot.com",
               messagingSenderId: "191707827355"
          };
          firebase.initializeApp(config);
          const databaseRef = firebase.database().ref();
          export const todosRef = databaseRef.child("todos");

          return (
               <div className="App">
                    <header className="App-header">
                         <img src={logo} className="App-logo" alt="logo" />
                         <h2>Sellect your template</h2>
                    </header>
               </div>
          );
     }
}
