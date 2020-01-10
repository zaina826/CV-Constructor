import React, { Component } from "react";
export default class Survey4 extends Component {
  render() {
    return <div>survey3</div>;
  }
}
//import React ,{Component} from 'react'
// export default class Survey3 extends Component {
//      state = {
//           DOB: "",
//           Name: "",
//           Address: "",
//           PN: "",
//           Gmail: "",
//           Website: "",
//           Facebook: "",
//           Twitter: "",
//           In: "",
//           Profile: "",
//           NOU: "",
//           WE: "",
//           Skills: "",
//           Achievements: ""
//         };
//         handlename = e => {
//           this.setState({
//             Name: e.target.value
//           });
//         };

//         handleDOB = e => {
//           this.setState({
//             DOB: e.target.value
//           });
//         };
//         handlePN = e => {
//           this.setState({
//             PN: e.target.value
//           });
//         };
//         handlegmail = e => {
//           this.setState({
//             Gmail: e.target.value
//           });
//         };
//         handleaddress = e => {
//           this.setState({
//             Address: e.target.value
//           });
//         };
//         handlein = e => {
//           this.setState({
//             In: e.target.value
//           });
//         };
//         handleNOU = e => {
//           this.setState({
//             NOU: e.target.value
//           });
//         };

//         handleskills = e => {
//           this.setState({
//             Skills: e.target.value
//           });
//         };
//         handleprofile = e => {
//           this.setState({
//             Profile: e.target.value
//           });
//         };
//         handleWE = e => {
//           this.setState({
//             WE: e.target.value
//           });
//         };
//         handlewebsite = e => {
//           this.setState({
//             Website: e.target.value
//           });
//         };
//         handleFacebook = e => {
//           this.setState({
//             Facebook: e.target.value
//           });
//         };
//         handleTwitter = e => {
//           this.setState({
//             Twitter: e.target.value
//           });
//         };

//         getLink = () => {
//           var Name = this.state.Name;
//           var PN = this.state.PN;
//           var Gmail = this.state.Gmail;
//           var Address = this.state.Address;
//           var In = this.state.In;
//           var NOU = this.state.NOU;
//           var Skills = this.state.Skills;
//           var Profile = this.state.Profile;
//           var WE = this.state.WE;

//           var fLink =
//             "/res/" +
//             Name +
//             "/" +
//             PN +
//             "/" +
//             Gmail +
//             "/" +
//             Address +
//             "/" +
//             In +
//             "/" +
//             NOU +
//             "/" +
//             Skills +
//             "/" +
//             Profile +
//             "/" +
//             WE ;

//           window.location.href = fLink;
//         };
//         render() {
//           return (
//             <div className="App-header">
//               <p>Fill in the following survey</p>
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your name"
//                 onChange={this.handlename}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your Proffesional title"
//                 onChange={this.handlePT}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your Phone Number"
//                 onChange={this.handlePN}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your Gmail address"
//                 onChange={this.handlegmail}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your Address"
//                 onChange={this.handleaddress}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your IN"
//                 onChange={this.handlein}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your major"
//                 onChange={this.handlemajor}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter the name of ypur university"
//                 onChange={this.handleNOU}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your degree"
//                 onChange={this.handledegree}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your skills"
//                 onChange={this.handleskills}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your Profile"
//                 onChange={this.handleprofile}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your work experience"
//                 onChange={this.handleWE}
//               />
//               <br />
//               <input
//                 className="txtboxes"
//                 placeholder="Enter your job title"
//                 onChange={this.handleJT}
//               />
//               <br />
//               <button className="button_a" onClick={this.getLink}>
//                 GO TO THE NEXT PAGE.
//               </button>
//             </div>
//           )}
