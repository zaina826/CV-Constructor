

import React, { Component } from "react";
import Firebase from "./database";

class Result1 extends Component {
  state = {};
  componentDidMount() {
    var key = this.props.match.params.key;
    var uid = this.props.match.params.uid;

    Firebase.database()
      .ref("CV/" + uid + "/" + key)
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
          <div className="CvElmnt">
            <p className="Cv_title">Proffesional title</p>
            <h5>{this.state.PT} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Major</p>
            <h5>{this.state.Major} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Name of university</p>
            <h5>{this.state.NameOfUniversity} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Degrees</p>
            <h5>{this.state.Degree} </h5>
          </div>
        </div>
        <div className="AllCvs">
          <div className="CvElmnt">
            <p className="Cv_title">Major</p>
            <h5>{this.state.Major} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Skills</p>
            <h5>{this.state.Skills} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Work experiance</p>
            <h5>{this.state.WE} </h5>
          </div>

          <div className="CvElmnt">
            <p className="Cv_title">Jop title</p>

            <h5>{this.state.JT} </h5>
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
    );
  }
}
export default Result1;