import React, { Component } from "react";
import phonelogo from "./phone.png";
import locationlogo from "./location.png";
import gmaillogo from "./gmail.png";
import fb from "./facebook.png";
import insta from "./insta.png";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import "./tech.css";

class Result5 extends Component {
  GetImg = () => {
    html2canvas(document.body).then(function (canvas) {
      var img = canvas.toDataURL()
      saveAs(img, "pretty image.png");
    });
  };
  render() {
    return (
      <div className="bgtech">
        <div className="white">
          <h2 contentEditable="true">Your first and last name</h2>
          <input type="range" id="vol" name="vol" min="0" max="50" />
          <button onClick={this.GetImg}>HI</button>
        </div>
      </div>

    );
  }
}
export default Result5;
