import React, { useState } from "react";

import * as firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

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
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //signInSuccessUrl: "/signedIn",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID]
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