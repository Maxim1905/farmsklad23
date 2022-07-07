import {useContext, useEffect} from "react";

import Head from "next/head";
import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";

import BonusProgram from "./BonusProgram";
import Helpfull from "./Helpfull";
import TopSlider from "./TopSlider";
import PopularCategories from "./PopularCategories";

const Main = () => {
  const user = useContext(UserContext);

  const {push} = useRouter();

  useEffect(() => {
    if (!user.isAuth) {
      push("/login");
    }
  }, [user.isAuth]);

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>

      <div>
        <TopSlider />
        <PopularCategories />
        <BonusProgram />
        <Helpfull />
      </div>
    </>
  );
};

export default Main;
