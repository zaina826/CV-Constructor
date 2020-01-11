import React, { Component } from "react";
import Firebase from "../FBConfig";
import "./template3.css";
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
        console.log("avatar:" + this.state.avatar);
        console.log("ProfileP:" + ProfileP);
      });
  }
  render() {
    return (
      <div className="App-header">
        <div className="LogoAndName">
          <img className="dev_logo" src={this.state.avatar} />
          <h3>{this.state.name} </h3>
          <h5>
            <h3>
              <br />
            </h3>
            {this.state.address} | {this.state.Gmail} | {this.state.PhoneNumber}{" "}
          </h5>

          <hr className="line" />
        </div>

        <div className="AllCvs">
          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Proffesional title</p>
            <h5>{this.state.PT} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Major</p>
            <h5>{this.state.Major} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Name of university</p>
            <h5>{this.state.NameOfUniversity} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Degrees</p>
            <h5>{this.state.Degree} </h5>
          </div>
        </div>
        <div className="AllCvs">
          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Major</p>
            <h5>{this.state.Major} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Skills</p>
            <h5>{this.state.Skills} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Work experiance</p>
            <h5>{this.state.WE} </h5>
          </div>

          <div className="CvElmnt_template3">
            <p className="Cv_title_template3">Jop title</p>
            <h5>{this.state.JT} </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Res3;
