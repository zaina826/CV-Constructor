import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";

class Res1 extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);

    var key = this.props.match.params.key;

    Firebase.database()
      .ref("CV/" + key)
      .on("value", list => {
        var object = list.val();
        var name = object.Name;
        var address = object.Address;

        this.setState({ name: name, address: address });
      });
  }
  render() {
    return (
      <div className="App-header">
        <h3>Name:{this.state.name} </h3>

        <h3>Name:{this.state.address} </h3>
        {/* <h3>Proffesional title: {match.params.PT}</h3>
    <h3>Phone Number: {match.params.PN}</h3>
    <h3>Gmail: {match.params.Gmail}</h3>
    <h3>Address: {match.params.Address}</h3>
    <h3>Linkdin: {match.params.In}</h3>
    <h3>Major: {match.params.Major}</h3>
    <h3>Name of university: {match.params.NOU}</h3>
    <h3>Degrees: {match.params.Degree}</h3>
    <h3>Skills: {match.params.Skills}</h3>
    <h3>Profile: {match.params.Profile}</h3>
    <h3>Work experiance: {match.params.WE}</h3>
    <h3>Job title: {match.params.JT}</h3> */}
      </div>
    );
  }
}
export default Res1;
