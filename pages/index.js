import Sidebar from "../components/Sidebar";
import { useContext, MainContext } from "../context";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from "../firebase";
import { useState, useEffect } from "react";
import Router from "next/router";

const index = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user] = useAuthState(authentication);
  const [isLoading, setIsLoading] = useState("");
  useEffect(() => {
    checkAuth();
  }, [user]);
  const checkAuth = async () => {
    (await user) ? setIsAuth(true) : setIsAuth(false);
  };
  return <Sidebar />;
};

export default index;
