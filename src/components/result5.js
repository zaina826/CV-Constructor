import React, { Component } from "react";
import phonelogo from "./phone.png";
import locationlogo from "./location.png";
import gmaillogo from "./gmail.png";
import fb from "./facebook.png";
import insta from "./insta.png";

import "./result3.css";
import Firebase from "./database";

class Result5 extends Component {
  state = {};
  componentDidMount() {
    var key = this.props.match.params.key;
    var uid = this.props.match.params.uid;

    Firebase.database()
      .ref("CV/" + uid + "/" + key)
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
            <hr className="lineT5" />
            <div>
              <div className='TextWithLogo'>
                <img src={phonelogo} className="smallimage" />
                {this.state.PhoneNumber}
              </div>
            </div>
            <div className='TextWithLogo'>
              <img src={locationlogo} className="smallimage" />
              {this.state.address}{" "}
            </div>
            <div className='TextWithLogo'>
              <img src={gmaillogo} className="smallimage" />
              {this.state.Gmail}
            </div>
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
            <div className="AllCvs">
              <div className="CvElmntT5">
                <p className="Cv_titleLight">Proffesional title</p>
                <h5 className='DarkText'>{this.state.PT} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Major</p>
                <h5 className='DarkText'>{this.state.Major} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Name of university</p>
                <h5 className='DarkText'>{this.state.NameOfUniversity} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Degrees</p>
                <h5 className='DarkText'>{this.state.Degree} </h5>
              </div>
            </div>
            <div className="AllCvs">
              <div className="CvElmntT5">
                <p className="Cv_titleLight">Major</p>
                <h5 className='DarkText'>{this.state.Major} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Skills</p>
                <h5 className='DarkText'>{this.state.Skills} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Work experiance</p>
                <h5 className='DarkText'>{this.state.WE} </h5>
              </div>

              <div className="CvElmntT5">
                <p className="Cv_titleLight">Jop title</p>

                <h5 className='DarkText'>{this.state.JT} </h5>
              </div>



            </div>

            <div className="Footer">
              <a className='FooterObj' href={"/template1/" + this.props.match.params.uid + "/" + this.props.match.params.key} >Template1</a>
              <a className='FooterObj' href={"/template2/" + this.props.match.params.uid + "/" + this.props.match.params.key} >Template2</a>
              <a className='FooterObj' href={"/template3/" + this.props.match.params.uid + "/" + this.props.match.params.key} > Template3</a>
              <a className='FooterObj' href={"/template4/" + this.props.match.params.uid + "/" + this.props.match.params.key} >Template4</a>
              <a className='FooterObj' href={"/template5/" + this.props.match.params.uid + "/" + this.props.match.params.key} >Template5</a>

            </div>

          </div>
        </div>

      </div>
    );
  }
}
export default Result5;
