import {ReactElement, useContext, useState, useEffect} from "react";

import {UserContext} from "../contexts/userContext";
import Footer from "./Footer";
import Header from "./Header";
import Auth from "./Auth";
import Admin from "./Admin";
import {useRouter} from "next/router";

type layoutProps = {
  children: ReactElement;
};

const Layout = ({children}: layoutProps) => {
  const {isAuth} = useContext(UserContext);

  const {push, asPath} = useRouter();

  useEffect(() => {
    if ((asPath === "/login" || asPath === "/registration") && isAuth) {
      push("/");
      return;
    }
  }, [asPath]);

  if (!isAuth) {
    return <Auth />;
  }

  if (asPath === "/admin") {
    return <Admin />;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
