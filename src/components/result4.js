import React, { Component } from "react";

import "./result3.css";
import Firebase from "../FBConfig";

class Res4 extends Component {
  state = {};
  componentDidMount() {
    var key = this.props.match.params.key;

    Firebase.database()
      .ref("CV/" + key)
      .on("value", list => {
        var object = list.val();
        var name = object.Name;
        var address = object.Address;
        var PT = object.PT;
        var PhoneNumber = object.PN;
        var Gmail = object.Gmail;
        var Major = object.Major;
        var NameOfUniversity = object.NOU;
        var Degree = object.Degree;
        var Skills = object.Skills;
        var Profile = object.Profile;
        var WE = object.WE;
        var JT = object.JT;
        var In = object.In;
        var ProfileP = object.profileP;

        this.setState({
          name: name,
          address: address,
          PT: PT,
          PhoneNumber: PhoneNumber,
          Gmail: Gmail,
          Major: Major,
          NameOfUniversity: NameOfUniversity,
          Degree: Degree,
          Skills: Skills,
          Profile: Profile,
          WE: WE,
          JT: JT,
          In: In,
          avatar: ProfileP
        });
      });
  }
  render() {
    return (
      <div>
        <img src={this.state.avatar} />
        <h3>{this.state.name}</h3>
        <h3>{this.state.PT}</h3>
        <h3>{this.state.PhoneNumber}</h3>
        <h3>{this.state.Gmail}</h3>
        <h3>{this.state.Major}</h3>
        <h3>{this.state.NameOfUniversity}</h3>
        <h3>{this.state.Degree}</h3>
        <h3>{this.state.Skills}</h3>
        <h3>{this.state.Profile}</h3>
        <h3>{this.state.WE}</h3>
        <h3>{this.state.JT}</h3>
        <h3>{this.state.IN}</h3>
      </div>
    );
  }
}
export default Res4;
