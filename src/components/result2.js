
import logo from "./logo.png"
import React, { Component } from "react";
import './main.css'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
class Result1 extends Component {
  GetImg = () => {
    html2canvas(document.getElementById("appheader")).then(function (canvas) {
      var img = canvas.toDataURL()
      saveAs(img, "pretty image.png");
    });
  };
  render() {
    return (
      <div >
        <div id="appheader">
          <div className="AllCvs2" >


            <div className='template2SecondaryDiv' >
              <img className="profpic" src={logo} />
              <h1 className='template2MainDivElmnts' contentEditable="true">Your first and last name</h1>
              <hr />
              <h1 className='template2MainDivElmnts' contentEditable="true">Address, City, State</h1>
              <hr />
              <h1 className='template2MainDivElmnts' contentEditable="true">+08 7940 784</h1>
              <hr />
              <h1 className='template2MainDivElmnts' contentEditable="true">yourgmail@gmail.com</h1>
              <hr />
              <h1 className='template2MainDivElmnts' contentEditable="true">Facebook username</h1>


            </div>


            <div className='template2MainDivElmnts'>


              <div className="AllCvs13">
                <div className="CvElmnt">
                  <p className="Cv_title">Proffesional title</p>
                  <h5 contentEditable="true">Your proffesional title </h5>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Major</p>
                  <h5 contentEditable="true">Your university major </h5>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Name of university</p>
                  <h5 contentEditable="true">Name of your university </h5>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Degrees</p>
                  <h5 contentEditable="true">Degree of major</h5>
                </div>
              </div>
              <div className="AllCvs23">
                <div className="CvElmnt">
                  <p className="Cv_title">Major</p>
                  <h5 contentEditable="true">Your university major</h5>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Skills</p>
                  <ol>
                    <li contentEditable="true">First Skill</li>
                    <li contentEditable="true">Second Skill </li>
                    <li contentEditable="true">Third Skill</li>
                    <li contentEditable="true">Fourth Skill</li>

                  </ol>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Work experience</p>
                  <ol>
                    <li contentEditable="true">Your first job </li>
                    <li contentEditable="true">Your second job </li>
                    <li contentEditable="true">Your third job </li>
                    <li contentEditable="true">Your fourth job</li>
                  </ol>
                </div>

                <div className="CvElmnt">
                  <p className="Cv_title">Job title</p>

                  <h5 contentEditable="true">Your job title</h5>
                </div>


              </div>


            </div>


          </div>
        </div>
        <a className='FooterObj' onClick={this.GetImg} >Download your CV</a>
      </div>
    );
  }
}
export default Result1;