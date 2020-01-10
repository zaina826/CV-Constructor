import React, { Component } from "react";
import "./main.css";
import Firebase from "../FBConfig";

class Res1 extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);

    var key = this.props.match.params.key;

    Firebase.database()
      .ref("CV/" + key)
      .on("value", list => {
        var object = list.val();
        var name = object.Name;
        var address = object.Address;

        this.setState({ name: name, address: address });
      });
  }
  render() {
    return (
      <div className="App-header">
        <h3>Name:{this.state.name} </h3>
        <h3>Name:{this.state.address} </h3>
      </div>
    );
  }
}
export default Res1;
