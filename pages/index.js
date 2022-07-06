import Sidebar from "../components/Sidebar";
import { useContext, MainContext } from "../context";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from "../firebase";
import { useState, useEffect } from "react";
import Router from "next/router";
import Loading from "../components/Loading";

const index = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, loading] = useAuthState(authentication);
  useEffect(() => {
    checkAuth();
  }, [user]);
  const checkAuth = async () => {
    (await user) ? setIsAuth(true) : setIsAuth(false);
  };
  if (loading) return <Loading />;

  return <Sidebar />;
};

export default index;
