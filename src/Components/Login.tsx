import React, { useState } from "react";

import * as firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/";

type LoginProps = {
  title: string;
  paragraph: string;
};

export default ({ title, paragraph }: LoginProps) => {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");
  firebase.auth().onAuthStateChanged(user => {
    console.log("User", user);
    setUser(user?.displayName || "");
    setSignedIn(!!user);
  });
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: "none"
  };
  return (
    <div id="firebase_auth">
      {signedIn ? (
        <div>
          hey {user}
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
      ) : (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
};
