import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";
import FileUploader from "react-firebase-file-uploader";

export default class Survey3 extends Component {
  state = {
    Name: "",
    PT: "",
    PN: "",
    Gmail: "",
    Address: "",
    Facebook: "",
    Instagram: "",
    Major: "",
    NOU: "",
    Degree: "",
    Skills1: "",
    Skills2: "",
    Skills3: "",
    Skills4: "",
    Skills5: "",
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
        this.setState({ avatarURL: url });
      });
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
  handleFacebook = e => {
    this.setState({
      Facebook: e.target.value
    });
  };
  handleInstagram = e => {
    this.setState({
      Instagram: e.target.value
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
  handleskills1 = e => {
    this.setState({
      Skills1: e.target.value
    });
  };
  handleskills2 = e => {
    this.setState({
      Skills2: e.target.value
    });
  };
  handleskills3 = e => {
    this.setState({
      Skills3: e.target.value
    });
  };
  handleskills4 = e => {
    this.setState({
      Skills4: e.target.value
    });
  };
  handleskills5 = e => {
    this.setState({
      Skills5: e.target.value
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
        Facebook: this.state.Facebook,
        Instagram: this.state.Instagram,
        Major: this.state.Major,
        NOU: this.state.NOU,
        Degree: this.state.Degree,
        Skills1: this.state.Skills1,
        Skills2: this.state.Skills2,
        Skills3: this.state.Skills3,
        Skills4: this.state.Skills4,
        Skills5: this.state.Skills5,
        Profile: this.state.Profile,
        WE: this.state.WE,
        JT: this.state.JT,
        profileP: this.state.avatarURL
      }).key;
    var finalLink = "./result3/" + key;
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
          placeholder="Enter your your current position/job"
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
          placeholder="Enter your Facebook link"
          onChange={this.handleFacebook}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter your Instagram link"
          onChange={this.handleInstagram}
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
          placeholder="Enter the name of your university"
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
          placeholder="Enter your first skill"
          onChange={this.handleskills1}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter another skill"
          onChange={this.handleskills2}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter another skill (optional)"
          onChange={this.handleskills3}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter another skill (optional)"
          onChange={this.handleskills4}
        />
        <br />
        <input
          className="txtboxes"
          placeholder="Enter another skill (optional)"
          onChange={this.handleskills5}
        />
        <br />
        <input
          className="txtboxes_big"
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
