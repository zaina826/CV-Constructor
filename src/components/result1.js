import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import Firebase from "./database";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import logo from "./logo.png";
class Result1 extends Component {
  state = {
    Name: "",
    PT: "",
    PN: "",
    Gmail: "",
    Address: "",
    Facebook: "",
    Major: "",
    NOU: "",
    Degree: "",
    Skills: "",
    Profile: "",
    WE: "",
    JT: "",
    loadingMessege: "",
    avatar: logo,
  };

  GetImg = () => {
    html2canvas(document.getElementById("mainDiv")).then(function (canvas) {
      document.body.appendChild(canvas);
      var img = canvas.toDataURL();
      saveAs(img, "User's CV.png");
    });
  };

  handleUploadError = (error) => {
    console.log("filename: " + error);

    this.setState({ isUploading: false });
    console.log("ERR: " + error);
  };
  handleUploadSuccess = (filename) => {
    console.log("filename: " + filename);
    Firebase.storage()
      .ref("images/")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        this.setState({ avatar: url });
        console.log(this.state.avatar);
      });
  };

  handleUp = (event) => {
    console.log(event.target.files[0]);
    var Selelcted = event.target.files[0];

    Firebase.storage()
      .ref("images/")
      .child(Selelcted)
      .getDownloadURL()
      .then((url) => {
        this.setState({ avatar: url });
        console.log(this.state.avatar);
      });
  };

  render() {
    return (
      <div>
        <div className="App-header" id="mainDiv">
          <div className="LogoAndName">
            <div class="image-upload">
              <label for="file-input">
                <img src={this.state.avatar} />
              </label>
              <FileUploader
                id="file-input"
                className="uploader"
                accept="image/*"
                name="avatar"
                placeholder="sellect your avatar"
                storageRef={Firebase.storage().ref("images")}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
              />
            </div>
            <input className="SurInputName" placeholder="Enter Your Name:" />
            {/* <h3 contentEditable="true">First & Last name </h3> */}
            <h5>
              <h3>
                <br />
              </h3>
              <div className="AddressesInTemplates">
                <input
                  className="InfoInput"
                  placeholder="Enter Your Address:"
                />
                <input className="InfoInput" placeholder="Enter Your Email:" />

                <input
                  className="InfoInput"
                  placeholder="Enter Your PhoneNumber:"
                />
              </div>
            </h5>
            <hr className="line" />
          </div>

          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Proffesional title</p>
              <input
                className="SurInput"
                placeholder="Your Proffesional title:"
              />
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <input
                className="SurInput"
                placeholder="Your university major:"
              />{" "}
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Name of university</p>
              <input className="SurInput" placeholder="Your university name:" />
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Degrees</p>
              <input
                className="SurInput"
                placeholder="Your Major's degrees:"
              />{" "}
            </div>
          </div>
          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Skills</p>
              <ol>
                <input className="SurInput" placeholder="First skill:" />
                <input className="SurInput" placeholder="Your 2nd Skill:" />
                <input className="SurInput" placeholder="Your 3rd skill:" />
                <input className="SurInput" placeholder="Your 4th skill:" />
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Work experience</p>
              <ol>
                <input className="SurInput" placeholder="Your 1st job:" />
                <input className="SurInput" placeholder="Your 2nd Job:" />
                <input className="SurInput" placeholder="Your 3rd Job:" />

                <input className="SurInput" placeholder="Your 4th Job:" />
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Job title</p>

              <input className="SurInput" placeholder="Your current Job:" />
            </div>
          </div>
          <a className="FooterObj" onClick={this.GetImg}>
            Download your CV
          </a>
          {/* </div><a className='FooterObj' onClick={this.GetImg} >Save to database and get link</a> */}

          <div className="Footer">
            <a className="FooterObj" href={"/template1"}>
              Template1
            </a>
            <a className="FooterObj" href={"/template2"}>
              Template2
            </a>
            <a className="FooterObj" href={"/template3"}>
              {" "}
              Template3
            </a>
            <a className="FooterObj" href={"/template4"}>
              Template4
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Result1;
