import React from "react";

import * as firebase from "firebase/app";
import "firebase/database";
type FooProps = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: FooProps) => {
  const database = firebase.database();
  database
    .ref("auth_launches_foo")
    .push()
    .set(new Date().toLocaleString())
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
