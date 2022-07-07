import {useContext, useEffect, useState} from "react";

import {UserContext} from "../../contexts/userContext";

import {useRouter} from "next/router";

import Head from "next/head";

import Stepper from "./Stepper";

import styles from "./styles.module.scss";

import MyBusket from "./MyBusket";
import ReceivingOrder from "./ReceivingOrder";
import PaymentAndConfirmation from "./PaymentAndConfirmation";

const states = [MyBusket, ReceivingOrder, PaymentAndConfirmation];

const MOKK_STEPS = [
  "Моя корзина",
  "Способ получения",
  "Оплата и подтверждение",
];

const Busket = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const user = useContext(UserContext);

  const {push} = useRouter();

  useEffect(() => {
    if (!user.isAuth) {
      push("/login");
    }
  }, [user.isAuth]);

  const CurrentStep = states[currentStepIndex];

  return (
    <>
      <Head>
        <title>Корзина</title>
      </Head>

      <div className={styles.container}>
        <Stepper steps={MOKK_STEPS} currentStepIndex={currentStepIndex} />

        <CurrentStep setCurrentStepIndex={setCurrentStepIndex} />
      </div>
    </>
  );
};

export default Busket;
