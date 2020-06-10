import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import logo from "./logo.png";
class Result1 extends Component {
  GetImg = () => {
    html2canvas(document.getElementById("appheader")).then(function (canvas) {
      var img = canvas.toDataURL()
      saveAs(img, "MyCV.png");
    });
  };
  render() {

    return (
      <div className="App-header" >
        <div className="App-header" id="appheader">
          <div className="LogoAndName">
            <img className="profpic" src={logo} />
            <h3 contentEditable="true">Your first and last name </h3>
            <h5 contentEditable="true">
              <h3>
                <br />
              </h3>
              Adress, city, state | yourgmail@gmail.com | +90 7528 753
          </h5>
            <hr className="line" />
          </div>

          <div className="AllCvs1">
            <div className="CvElmnt">
              <p className="Cv_title">Proffesional title</p>
              <h5 contentEditable="true">Your Proffesional title </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <h5 contentEditable="true">Your univerisy major</h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Name of university</p>
              <h5 contentEditable="true">Name of university studied at</h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Degrees</p>
              <h5 contentEditable="true">Your university degree</h5>
            </div>
          </div>
          <div className="AllCvs2">
            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <h5 contentEditable="true">Your college major </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Skills</p>
              <ol>
                <li contentEditable="true">Your first skill </li>
                <li contentEditable="true">Your second skill </li>
                <li contentEditable="true">Your third skill </li>
                <li contentEditable="true">your fourth skill </li>

              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Work experience</p>
              <ol>
                <li contentEditable="true">Your first job  </li>
                <li contentEditable="true">Your second job</li>
                <li contentEditable="true">Your third job  </li>
                <li contentEditable="true">Your fourth job   </li>
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Job title</p>

              <h5 contentEditable="true">Your job title </h5>
            </div>

          </div>



        </div >
        <a className='FooterObj' onClick={this.GetImg} >Download your CV</a>
      </div>
    );
  }
}
export default Result1;