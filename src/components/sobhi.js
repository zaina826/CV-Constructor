import React, { Component } from "react";
import "./main.css";
import sobhi from "./sobhi.jpg";
export default class Sobhi extends Component {
  render() {
    return (
      <div className="App-header">
        <img className="dev_logo" src={sobhi} />
        <h4>Sobhi Ashraf</h4>
        <hr className="line" />
        <div className="dev_data">
          <p className="dev_data">
            Sobhi Ashraf: 17 years old, from Deir al-Balah, started programing
            since 2016, by creating blogger templates <br /> then started
            creating wordpress templates in 2018 beginnings, then I joined
            CodeForPalestine in 2018 July, <br /> I learned python,
            react,react-native <br /> {"LOVE PROGRAMING <3"}
            <br />
          </p>
        </div>
      </div>
    );
  }
}
