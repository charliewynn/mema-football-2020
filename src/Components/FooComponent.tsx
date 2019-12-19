import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
type FooProps = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: FooProps) => {
  const database = firebase.database();
  const user = firebase.auth().currentUser;
  database
    .ref("auth_launches_foo/" + user?.uid)
    .push()
    .set(user?.displayName + " " + new Date().toLocaleString())
    .then(
      snapshot => {
        console.log("SS", snapshot);
      },
      error => {
        console.log("Error", error);
      }
    );
  return (
    <div>
      FOOFOO
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};
