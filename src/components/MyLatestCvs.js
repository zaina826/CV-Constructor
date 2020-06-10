import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import fire from "./database";
import Firebase from "./database";

export default class LatestCvs extends Component {

    state = {

        userCvs: []


    }



    GetData = () => {
        Firebase.auth().onAuthStateChanged(user => {

            console.log('DONE')
            var db = Firebase.database();
            var ref = Firebase.database().ref("CV/" + Firebase.auth().currentUser.uid)
            ref.orderByChild("Key").on("child_added", function (snapshot) {
                console.log(snapshot.key)

                return (snapshot)

            }
            )

        });


    }



    componentDidMount() {

        console.log(
            'test'
        )

        this.GetData()
        this.setState(
            { userCvs: this.GetData.key }
        ).then(console.log("state:" + this.state.userCvs)
        )

    }

    render() {
        return (
            <div className="navbar">


            </div>
        );
    }
}
