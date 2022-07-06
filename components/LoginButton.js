import { useState } from "react";
import styled from "styled-components";
import { authentication } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { Button } from "@material-ui/core";
const Login = () => {
  const [userInfo, setUserInfo] = useState();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const auth = getAuth();
  console.log(auth);

  return <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE </Button>;
};

export default Login;
export const Button = styled.button`
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  background-color: rgba(37, 211, 102, 0.1);
  border: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
    }
    80% {
      box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
    }
  }
`;
