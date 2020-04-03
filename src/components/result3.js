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
        var Profile = object.Profile;
        var job1 = object.job1;
        var jdate1 = object.jdate1;
        var job2 = object.job2;
        var jdate2 = object.jdate2;
        var job3 = object.job3;
        var jdate3 = object.jdate3;
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
          Profile: Profile,
          Facebook: facebook,
          Instagram: insta,
          job1: job1,
          jdate1: jdate1,
          job2: job2,
          jdate2: jdate2,
          job3: job3,
          jdate3: jdate3,
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
            <h2 className="gmail">
              <img src={gmaillogo} className="smallimage" />
              {this.state.Gmail}
            </h2>
            <div className="Socialm">
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
            <h1>
              <mark>{this.state.name}</mark>
            </h1>
            <h3>{this.state.JT}</h3>
            <h3>Proffsional title: <mark>{this.state.PT}</mark></h3>
            <h3>Majored in <mark>{this.state.Major}</mark></h3>
            <h3>Stufied at <mark>{this.state.NameOfUniversity}</mark></h3>
            {this.state.Degree}
            <br />
            <div className="skills">
              <h3>{this.state.Skills1}</h3>
              <h3>{this.state.Skills2}</h3>
              <h3>{this.state.Skills3}</h3>
              <h3>{this.state.Skills4}</h3>
            </div>
            <mark><h3>{this.state.Profile}</h3></mark>
            <div className="jobs">
              <h3>{this.state.job1}<h3>(<mark>{this.state.jdate1}</mark>)</h3></h3>
              <h3>{this.state.job2}<h3>(<mark>{this.state.jdate2}</mark>)</h3></h3>
              <h3>{this.state.job3}<h3>(<mark>{this.state.jdate3}</mark>)</h3></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Res3;
