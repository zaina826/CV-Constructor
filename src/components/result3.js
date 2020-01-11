import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";

class Res3 extends Component {
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
        console.log(
          object +
            name +
            address +
            PT +
            PhoneNumber +
            Gmail +
            Major +
            NameOfUniversity +
            Degree +
            Skills +
            Profile +
            WE +
            JT
        );

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
          In: In
        });
      });
  }
  render() {
    return (
      <div className="App-header">
        <h3>Name:{this.state.name} </h3>
        <h3>address:{this.state.address} </h3>
        <h3>Proffesional title:{this.state.PT} </h3>
        <h3>Phone Number:{this.state.PN} </h3>
        <h3>Gmail:{this.state.Gmail} </h3>
        <h3>Linkdin:{this.state.In} </h3>
        <h3>Major:{this.state.Major} </h3>
        <h3>Name of university:{this.state.NameOfUniversity} </h3>
        <h3>Degree:{this.state.Degree} </h3>
        <h3>Skills:{this.state.Skills} </h3>
        <h3>Work experiances:{this.state.WE} </h3>
        <h3>Job title:{this.state.JT} </h3>
      </div>
    );
  }
}
export default Res3;
