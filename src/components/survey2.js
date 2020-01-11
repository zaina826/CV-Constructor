import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";
export default class Survey2 extends Component {
  state = {
    Name: "",
    PT: "",
    PN: "",
    Gmail: "",
    Address: "",
    IN: "",
    NOU: "",
    Degree: "",
    Skills: "",
    Profile: "",
    WE: ""
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
      IN: e.target.value
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
  MoveToFB = () => {
    var key = Firebase.database()
      .ref("CV")
      .push({
        Name: this.state.Name,
        PT: this.state.PT,
        PN: this.state.PN,
        Gmail: this.state.Gmail,
        Address: this.state.Address,
        IN: this.state.IN,
        NOU: this.state.NOU,
        Degree: this.state.Degree,
        Skills: this.state.Skills,
        Profile: this.state.Profile,
        WE: this.state.WE
      }).key;
    var finalLink = "./result2/" + key;
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

        <button className="button_a" onClick={this.MoveToFB}>
          GET YOUR CV
        </button>
      </div>
    );
  }
}
