import React, { Component } from "react";
import fire from "./database";
import "./main.css";
export default class Login extends Component {
  state = { email: "", password: "" };

  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user logged");
        window.location.href = "/";
      }
    });
  }

  handleSignUp = () => {
    const { email, password } = this.state;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));

    fire
      .database()
      .ref("users")
      .push({ email: email });
  };

  handleSignin = () => {
    const { email, password } = this.state;
    console.log(email);
    fire.auth();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
    console.log(e.target.value);
  };
  handlepass = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    return (
      <div className="App-header">
        <input
          className="login_txt"
          onChange={this.handleEmail}
          placeholder="Enter your Email"
        />
        <br />
        <input
          className="login_txt"
          onChange={this.handlepass}
          type="password"
          name="password"
          placeholder="Enter Your password"
        />
        <button className="button_a" onClick={this.handleSignin}>
          Login
        </button>
        <br />
        <button className="button_a" onClick={this.handleSignUp}>
          SignUp
        </button>
      </div>
    );
  }
}
