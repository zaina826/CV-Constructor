import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";
import Res3 from "./result3";
import FileUploader from "react-firebase-file-uploader";

export default class Survey3 extends Component {
  state = {
    Name: "",
    PT: "",
    PN: "",
    Gmail: "",
    Address: "",
    In: "",
    Major: "",
    NOU: "",
    Degree: "",
    Skills: "",
    Profile: "",
    WE: "",
    JT: "",
    loadingMessege: ""
  };

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    Firebase.storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);

        this.setState({ avatarURL: url });
      });
  };

  selImg = e => {
    console.log(e.target.value);
  };
  handlename = e => {
    this.setState({
      Name: e.target.value
    });
  };

  handlePT = e => {
    this.setState({
      PT: e.target.value
    });
  };
  handlePN = e => {
    this.setState({
      PN: e.target.value
    });
  };
  handlegmail = e => {
    this.setState({
      Gmail: e.target.value
    });
  };
  handleaddress = e => {
    this.setState({
      Address: e.target.value
    });
  };
  handlein = e => {
    this.setState({
      In: e.target.value
    });
  };
  handlemajor = e => {
    this.setState({
      Major: e.target.value
    });
  };
  handleNOU = e => {
    this.setState({
      NOU: e.target.value
    });
  };
  handledegree = e => {
    this.setState({
      Degree: e.target.value
    });
  };
  handleskills = e => {
    this.setState({
      Skills: e.target.value
    });
  };
  handleprofile = e => {
    this.setState({
      Profile: e.target.value
    });
  };
  handleWE = e => {
    this.setState({
      WE: e.target.value
    });
  };
  handleJT = e => {
    this.setState({
      JT: e.target.value
    });
  };

  MoveToFB = () => {
    var key = Firebase.database()
      .ref("CV")
      .push({
        Name: this.state.Name,
        PT: this.state.PT,
        PN: this.state.PN,
        Gmail: this.state.Gmail,
        Address: this.state.Address,
        In: this.state.In,
        Major: this.state.Major,
        NOU: this.state.NOU,
        Degree: this.state.Degree,
        Skills: this.state.Skills,
        Profile: this.state.Profile,
        WE: this.state.WE,
        JT: this.state.JT,
        profileP: this.state.avatarURL
      }).key;
    var finalLink = "./result4/" + key;
    this.setState({ loadingMessege: "Loading your CV..." });
    setTimeout(() => {
      window.location.href = finalLink;
    }, 2000);
  };
  render() {
    return (
      <div className="App-header">
        <p>Fill in the following survey</p>
        <input
          className="txtboxes"
          placeholder="Enter your name"
          onChange={this.handlename}
        />
        <h5>Choose your profile Photo</h5>
        <FileUploader
          className="uploader"
          accept="image/*"
          name="avatar"
          placeholder="select image"
          randomizeFilename
          storageRef={Firebase.storage().ref("images")}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
        />

        <br />

        <input
          className="txtboxes"
          placeholder="Enter your Proffesional title"
          onChange={this.handlePT}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Phone Number"
          onChange={this.handlePN}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Gmail address"
          onChange={this.handlegmail}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Address"
          onChange={this.handleaddress}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your IN"
          onChange={this.handlein}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your major"
          onChange={this.handlemajor}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter the name of ypur university"
          onChange={this.handleNOU}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your degree"
          onChange={this.handledegree}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your skills"
          onChange={this.handleskills}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Profile"
          onChange={this.handleprofile}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your work experience"
          onChange={this.handleWE}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your job title"
          onChange={this.handleJT}
        />
        <br />

        <button className="button_a" onClick={this.MoveToFB}>
          GET YOUR CV
        </button>
        <h4>{this.state.loadingMessege}</h4>
      </div>
    );
  }
}
