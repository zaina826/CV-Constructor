

import React, { Component } from "react";
import Firebase from "./database";
import './main.css'
class Result3 extends Component {
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
      <div className="template3MainDiv">


        <div className='template3SecondaryDiv' >
          <img className="dev_logoT2" src={this.state.avatar} />

          <h1 className='template3MainDivElmnts'>{this.state.name}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.address}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.PhoneNumber}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.Gmail}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.In}</h1>


        </div>


        <div className='template3MainDivElmnts'>


          <div className="AllCvs">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Proffesional title</p>
              <h5 className='DarkText'>{this.state.PT} </h5>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Major</p>
              <h5 className='DarkText'>{this.state.Major} </h5>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Name of university</p>
              <h5 className='DarkText'>{this.state.NameOfUniversity} </h5>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Degrees</p>
              <h5 className='DarkText'>{this.state.Degree} </h5>
            </div>
          </div>
          <div className="AllCvs">
            <div className="CvElmntLight">
              <p className="Cv_titleLight">Major</p>
              <h5 className='DarkText'>{this.state.Major} </h5>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Skills</p>
              <h5 className='DarkText'>{this.state.Skills} </h5>
            </div>

            <div className="CvElmntLight">
              <p className="Cv_titleLight">Work experiance</p>
              <h5 className='DarkText'>{this.state.WE} </h5>
            </div>

            <div className="CvElmntLight">
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
    );
  }
}
export default Result3;