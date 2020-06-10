

import React, { Component } from "react";
import './main.css'
import logo from "./logo.png"
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
class Result3 extends Component {
  GetImg = () => {
    html2canvas(document.getElementById("appheader")).then(function (canvas) {
      var img = canvas.toDataURL()
      saveAs(img, "pretty image.png");
    });
  };
  render() {
    return (
      <div>
        <div className="AllCvs13" id="appheader">

          <div className='template3SecondaryDiv' >
            <img className="profpic" src={logo} />
            <h1 className='template3MainDivElmnts' contentEditable="true">Your first and last name</h1>
            <hr />
            <h1 className='template3MainDivElmnts' contentEditable="true">Address, city, state</h1>
            <hr />
            <h1 className='template3MainDivElmnts' contentEditable="true">+898 9274 894</h1>
            <hr />
            <h1 className='template3MainDivElmnts' contentEditable="true">yourgmail@gmail.com</h1>
            <hr />
            <h1 className='template3MainDivElmnts' contentEditable="true">Instagram username </h1>

          </div>


          <div className='template3MainDivElmnts'>


            <div className="AllCvs13">
              <div className="CvElmntLight">
                <p className="Cv_titleLight">Proffesional title</p>
                <h5 className='DarkText' contentEditable="true">Your Proffesional title </h5>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Major</p>
                <h5 className='DarkText' contentEditable="true">Your university major </h5>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Name of university</p>
                <h5 className='DarkText' contentEditable="true">Name of your univeristy</h5>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Degrees</p>
                <h5 className='DarkText' contentEditable="true">Degree of major </h5>
              </div>
            </div>
            <div className="AllCvs23">
              <div className="CvElmntLight">
                <p className="Cv_titleLight">Major</p>
                <h5 className='DarkText' contentEditable="true">Your university major </h5>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Skills</p>
                <ol>
                  <li className='DarkText' contentEditable="true">First skill</li>
                  <li className='DarkText' contentEditable="true">Second skill</li>
                  <li className='DarkText' contentEditable="true">Third skill</li>
                  <li className='DarkText' contentEditable="true">Fourth skill</li>

                </ol>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Work experience</p>

                <ol>
                  <li className='DarkText' contentEditable="true">Your first job</li>
                  <li className='DarkText' contentEditable="true">Your second job</li>
                  <li className='DarkText' contentEditable="true">Your third job</li>
                  <li className='DarkText' contentEditable="true">Your fourth job</li>

                </ol>
              </div>

              <div className="CvElmntLight">
                <p className="Cv_titleLight">Job title</p>

                <h5 className='DarkText' contentEditable="true">Your job title</h5>
              </div>

            </div>

          </div>
        </div>
        <a className='FooterObj' onClick={this.GetImg} >Download your CV</a>
      </div>
    );
  }
}
export default Result3;