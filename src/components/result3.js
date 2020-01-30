import React, { Component } from "react";
import phonelogo from "./phone.png";
import locationlogo from "./location.png";
import gmaillogo from "./gmail.png";
import fb from "./facebook.png";
import insta from "./insta.png";

import "./result3.css";
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
        var facebook = object.Facebook;
        var insta = object.Instagram;
        var address = object.Address;
        var PT = object.PT;
        var PhoneNumber = object.PN;
        var Gmail = object.Gmail;
        var Major = object.Major;
        var NameOfUniversity = object.NOU;
        var Degree = object.Degree;
        var Skills1 = object.Skills1;
        var Skills2 = object.Skills2;
        var Skills3 = object.Skills3;
        var Skills4 = object.Skills4;
        var Skills5 = object.Skills5;
        var Profile = object.Profile;
        var WE = object.WE;
        var JT = object.JT;
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
          Skills1: Skills1,
          Skills2: Skills2,
          Skills3: Skills3,
          Skills4: Skills4,
          Skills5: Skills5,
          Profile: Profile,
          Facebook: facebook,
          Instagram: insta,
          WE: WE,
          JT: JT,
          avatar: ProfileP
        });
      });
  }
  render() {
    return (
      <div>
        <body className="background"></body>
        <div className="bothflexes">
          <div className="maininfo">
            <img src={this.state.avatar} className="profilepic" />
            <h2 className="h2s">Contact info</h2>
            <h5>_______________________</h5>
            <div>
              <h2>
                <img src={phonelogo} className="smallimage" />
                {this.state.PhoneNumber}
              </h2>
            </div>
            <h2>
              <img src={locationlogo} className="smallimage" />
              {this.state.address}{" "}
            </h2>
            <h2>
              <img src={gmaillogo} className="smallimage" />
              {this.state.Gmail}
            </h2>
            <div>
              <a href={this.state.Facebook}>
                <img src={fb} className="socialmedia" />
              </a>
              <a href={this.state.Instagram}>
                <img src={insta} className="socialmedia" />
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="otherinfo">
            <h1>{this.state.name}</h1>
            <h3>{this.state.PT}</h3>
            <h3>{this.state.Major}</h3>
            <h3>{this.state.NameOfUniversity}</h3>
            <h3>{this.state.Degree}</h3>
            <h3>{this.state.Skills1}</h3>
            <h3>{this.state.Skills2}</h3>
            <h3>{this.state.Skills3}</h3>
            <h3>{this.state.Skills4}</h3>
            <h3>{this.state.Skills5}</h3>
            <h3>{this.state.Profile}</h3>
            <h3>{this.state.WE}</h3>
            <h3>{this.state.JT}</h3>
            <h3>{this.state.In}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Res3;
