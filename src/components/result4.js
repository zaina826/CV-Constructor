import React, { Component } from "react";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
class Result4 extends Component {
  GetImg = () => {
    html2canvas(document.getElementById("appheader")).then(function (canvas) {
      var img = canvas.toDataURL()
      saveAs(img, "MyCV.png");
    });
  };
  render() {
    return (
      <div className="App-headerLight">
        <div className="App-headerLight" id="appheader">
          <div className="LogoAndNameTemplate4">
            <h3 className='DarkText' contentEditable="true">Your First and Last name </h3>
            <h5 contentEditable="true">
              <h3 className='DarkText' >
                <br />
              </h3>
              Adress, city, state | yourgmail@gmail.com | +90 7528 753
      </h5>
            <hr className="line" />
          </div>
          <div className="AllCvs1">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Proffesional title</p>
              <h5 className='DarkText' contentEditable="true">Your proffestional title</h5>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Major</p>
              <h5 className='DarkText' contentEditable="true"> Your university major</h5>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Name of university</p>
              <h5 className='DarkText' contentEditable="true">The name of your university </h5>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Degrees</p>
              <h5 className='DarkText' contentEditable="true">Your major's degree</h5>
            </div>
          </div>
          <div className="AllCvs2">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Major</p>
              <h5 className='DarkText' contentEditable="true">Your university major</h5>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Skills</p>
              <ol className='DarkText' >
                <li contentEditable="true">Your first skill </li>
                <li contentEditable="true">Your second skill </li>
                <li contentEditable="true">Your third skill</li>
                <li contentEditable="true">Your fourth skill </li>
              </ol>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Work experiance</p>
              <ol className='DarkText'>
                <li contentEditable="true">Your first job </li>
                <li contentEditable="true">Your second job </li>
                <li contentEditable="true">Your third job </li>
                <li contentEditable="true">Your fourth job </li>
              </ol>
            </div>
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Job title</p>
              <h5 className='DarkText' contentEditable="true">Your job title </h5>
            </div>

          </div>
        </div>
        <a className='FooterObj' onClick={this.GetImg} >Download your CV</a>
      </div>
    );
  }
}
export default Result4;