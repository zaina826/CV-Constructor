import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import Firebase from "./database";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import logo from "./logo.png";

class Result4 extends Component {
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
      <div>
        <div className="App-headerLight">
          <div className="LogoAndNameTemplate4">
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
            <input
              className="txtInputTemplate4"
              placeholder="Enter Your Name:"
            />
            {/* <h3 contentEditable="true">First & Last name </h3> */}
            <h5>
              <h3>
                <br />
              </h3>
              <div className="AddressesInTemplates">
                <input className="SurInput" placeholder="Enter Your Address:" />
                <input className="SurInput" placeholder="Enter Your Email:" />

                <input
                  className="SurInput"
                  placeholder="Enter Your PhoneNumber:"
                />
              </div>
            </h5>
            <hr className="line" />
          </div>

          <div className="AllCvs">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Proffesional title</p>
              <input
                className="txtInputTemplate4"
                placeholder="Your Proffesional title:"
              />
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Major</p>
              <input
                className="txtInputTemplate4"
                placeholder="Your university major:"
              />{" "}
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Name of university</p>
              <input
                className="txtInputTemplate4"
                placeholder="Your university name:"
              />
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Degrees</p>
              <input
                className="txtInputTemplate4"
                placeholder="Your Major's degrees:"
              />{" "}
            </div>
          </div>
          <div className="AllCvs">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Skills</p>
              <ol>
                <input
                  className="txtInputTemplate4"
                  placeholder="First skill:"
                />
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 2nd Skill:"
                />
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 3rd skill:"
                />
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 4th skill:"
                />
              </ol>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Work experience</p>
              <ol>
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 1st job:"
                />
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 2nd Job:"
                />
                <input
                  className="txtInputTemplate4"
                  placeholder="Your 3rd Job:"
                />

                <input
                  className="txtInputTemplate4"
                  placeholder="Your 4th Job:"
                />
              </ol>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Job title</p>

              <input
                className="txtInputTemplate4"
                placeholder="Your current Job:"
              />
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
export default Result4;
