import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";

class Res2 extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);

    var key = this.props.match.params.key;

    Firebase.database()
      .ref("CV/" + key)
      .on("value", list => {
        var object = list.val();
        var name = object.Name;
        var PT = object.PT;
        var PN = object.PN;
        var Gmail = object.Gmail;
        var Address = object.Address;
        var IN = object.IN;
        var NOU = object.NOU;
        var Degree = object.Degree;
        var Skills = object.Skills;
        var Profile = object.Profile;
        var WE = object.WE;

        this.setState({
          name: name,
          PT: PT,
          PN: PN,
          Gmail: Gmail,
          Address: Address,
          IN: IN,
          NOU: NOU,
          Degree: Degree,
          Skills: Skills,
          Profile: Profile,
          WE: WE
        });
      });
  }
  render() {
    return (
      <div className="App-header">
        <h3>Name:{this.state.name} </h3>
        <h3>Proffesional title:{this.state.PT} </h3>
        <h3>Phone number:{this.state.PN} </h3>
        <h3>mail:{this.state.Gmail} </h3>
        <h3>Address:{this.state.Address} </h3>
        <h3>IN:{this.state.IN} </h3>
        <h3>Name of uni:{this.state.NOU} </h3>
        <h3>degree:{this.state.Degree} </h3>
        <h3>skills:{this.state.Skills} </h3>
        <h3>profile:{this.state.Profile} </h3>
        <h3>we:{this.state.WE} </h3>
      </div>
    );
  }
}
export default Res2;
