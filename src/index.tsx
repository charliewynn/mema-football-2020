import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfbYR70N_1Z1d1HRl5qi-6j6gRMdxUiKk",
  authDomain: "mema-football-pool-2020.firebaseapp.com",
  databaseURL: "https://mema-football-pool-2020.firebaseio.com",
  projectId: "mema-football-pool-2020",
  storageBucket: "mema-football-pool-2020.appspot.com",
  messagingSenderId: "703783527393",
  appId: "1:703783527393:web:641d060dba257ff2dda8a0"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database
  .ref("launches")
  .push()
  .set({ time: new Date().getTime() })
  .then(
    snapshot => {
      console.log("SS", snapshot);
    },
    error => {
      console.log("Error", error);
    }
  );

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
