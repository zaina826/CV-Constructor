import React, { Component } from "react";
import Firebase from "./database";
import "./main.css";
import FileUploader from "react-firebase-file-uploader";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import logo from "./logo.png";

class Result2 extends Component {
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
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
      var img = canvas.toDataURL();
      saveAs(img, "User's CV.png");
    });
  };

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.log(error);
  };
  handleUploadSuccess = (filename) => {
    Firebase.storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        this.setState({ avatar: url });
        console.log(this.state.avatar);
      });
  };

  componentDidMount() {
    Firebase.database()
      .ref("CV/")
      .on("value", (list) => {
        var object = list.val();
        var ProfileP = object.profileP;
      });
  }

  render() {
    return (
      <div className="template2MainDiv">
        <div className="template2SecondaryDiv">
          <div class="image-upload">
            <label for="file-input">
              <img src={this.state.avatar} />
            </label>
            <FileUploader
              id="file-input"
              className="uploader"
              accept="image/*"
              ئ
              name="avatar"
              placeholder="sellect your avatar"
              storageRef={Firebase.storage().ref("images")}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
          <input className="SurInput" placeholder="Enter Your Name" />
          <hr />

          <input className="SurInput" placeholder="Enter Your Address" />
          <hr />

          <input className="InfoInput" placeholder="Enter Your PhoneNumber:" />
          <hr />

          <input className="InfoInput" placeholder="Enter Your Email:" />

          <hr />
        </div>

        <div className="template2MainDivElmnts">
          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Proffesional title</p>
              <input
                className="SurInput"
                placeholder="Your Proffesional title:"
              />{" "}
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
              <input className="SurInput" placeholder="Your university name:" />
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
              <p className="Cv_title">Work experiance</p>
              <ol>
                <input className="SurInput" placeholder="Your 1st job:" />
                <input className="SurInput" placeholder="Your 2nd Job:" />
                <input className="SurInput" placeholder="Your 3rd Job:" />

                <input className="SurInput" placeholder="Your 4th Job:" />
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Jop title</p>

              <input className="SurInput" placeholder="Your 1st job:" />
            </div>
          </div>
          <a className="FooterObj" onClick={this.GetImg}>
            Download your CV
          </a>

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
export default Result2;
