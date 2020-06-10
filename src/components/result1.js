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
  handlename = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };

  handlePT = (e) => {
    this.setState({
      PT: e.target.value,
    });
  };
  handlePN = (e) => {
    this.setState({
      PN: e.target.value,
    });
  };
  handlegmail = (e) => {
    this.setState({
      Gmail: e.target.value,
    });
  };
  handleaddress = (e) => {
    this.setState({
      Address: e.target.value,
    });
  };
  handleFacebook = (e) => {
    this.setState({
      Facebook: e.target.value,
    });
  };
  handlemajor = (e) => {
    this.setState({
      Major: e.target.value,
    });
  };
  handleNOU = (e) => {
    this.setState({
      NOU: e.target.value,
    });
  };
  handledegree = (e) => {
    this.setState({
      Degree: e.target.value,
    });
  };
  handleskill1 = (e) => {
    this.setState({
      Skill1: e.target.value,
    });
  };
  handleskill2 = (e) => {
    this.setState({
      Skill2: e.target.value,
    });
  };

  handleskill3 = (e) => {
    this.setState({
      Skill3: e.target.value,
    });
  };
  handleskill4 = (e) => {
    this.setState({
      Skill4: e.target.value,
    });
  };
  handleprofile = (e) => {
    this.setState({
      Profile: e.target.value,
    });
  };
  handleWE1 = (e) => {
    this.setState({
      WE1: e.target.value,
    });
  };

  handleWE2 = (e) => {
    this.setState({
      WE2: e.target.value,
    });
  };

  handleWE3 = (e) => {
    this.setState({
      WE3: e.target.value,
    });
  };

  handleWE4 = (e) => {
    this.setState({
      WE4: e.target.value,
    });
  };
  handleJT = (e) => {
    this.setState({
      JT: e.target.value,
    });
  };
  GetImg = () => {
    html2canvas(document.getElementById("mainDiv")).then(function (canvas) {
      document.body.appendChild(canvas);
      var img = canvas.toDataURL();
      saveAs(img, "pretty image.png");
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
            <input
              className="SurInput"
              placeholder="Enter Your Name:"
              onChange={this.handlename}
            />
            {/* <h3 contentEditable="true">First & Last name </h3> */}
            <h5>
              <h3>
                <br />
              </h3>
              <div className="AddressesInTemplates">
                <input
                  className="InfoInput"
                  placeholder="Enter Your Address:"
                  onChange={this.handleaddress}
                />
                <input
                  className="InfoInput"
                  placeholder="Enter Your Email:"
                  onChange={this.handlegmail}
                />

                <input
                  className="InfoInput"
                  placeholder="Enter Your PhoneNumber:"
                  onChange={this.handlePN}
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
                onChange={this.handlePT}
              />
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <input
                className="SurInput"
                placeholder="Your university major:"
                onChange={this.handlemajor}
              />{" "}
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Name of university</p>
              <input
                className="SurInput"
                placeholder="Your university name:"
                onChange={this.handleNOU}
              />
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Degrees</p>
              <input
                className="SurInput"
                placeholder="Your Major's degrees:"
                onChange={this.handledegree}
              />{" "}
            </div>
          </div>
          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Skills</p>
              <ol>
                <input
                  className="SurInput"
                  placeholder="First skill:"
                  onChange={this.handleskill1}
                />
                <input
                  className="SurInput"
                  placeholder="Your 2nd Skill:"
                  onChange={this.handleskill2}
                />
                <input
                  className="SurInput"
                  placeholder="Your 3rd skill:"
                  onChange={this.handleskill3}
                />
                <input
                  className="SurInput"
                  placeholder="Your 4th skill:"
                  onChange={this.handleskill4}
                />
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Work experience</p>
              <ol>
                <input
                  className="SurInput"
                  placeholder="Your 1st job:"
                  onChange={this.handleWE1}
                />
                <input
                  className="SurInput"
                  placeholder="Your 2nd Job:"
                  onChange={this.handleWE2}
                />
                <input
                  className="SurInput"
                  placeholder="Your 3rd Job:"
                  onChange={this.handleWE3}
                />

                <input
                  className="SurInput"
                  placeholder="Your 4th Job:"
                  onChange={this.handleWE4}
                />
              </ol>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Job title</p>

              <input
                className="SurInput"
                placeholder="Your current Job:"
                onChange={this.handleJT}
              />
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
