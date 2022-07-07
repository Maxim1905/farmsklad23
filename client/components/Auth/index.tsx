import {useContext, useEffect, useState} from "react";
import Head from "next/head";

import Link from "next/link";

import styles from "./styles.module.scss";
import Input from "../common/Input";
import Logo from "../common/Logo";
import Button from "../common/Button";
import {UserContext} from "../../contexts/userContext";
import {registration, login} from "../../http/userAPI";

import {useRouter} from "next/router";

const validateEmail = (email) => {
  var re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
};

const Auth = () => {
  const {setIsAuth, setUser, isAuth} = useContext(UserContext) || {};

  const {asPath, push} = useRouter();

  const isLoginPage = asPath === "/login";

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (!isAuth && asPath !== "/login" && asPath !== "/registration") {
      push("/login");
      return;
    }
  }, [asPath]);

  const handleSubmit = async () => {
    if (!validateEmail(emailValue)) {
      setEmailError("Введите корректный email");

      if (!passwordValue) setPasswordError("Введите пароль");

      return;
    }

    let user;

    try {
      if (isLoginPage) {
        user = await login(emailValue, passwordValue);
      } else {
        user = await registration(emailValue, passwordValue);
      }

      setIsAuth(true);
      setUser(user);
      push("/");
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      <Head>
        <title> {isLoginPage ? "Вход" : "Регистрация"}</title>
      </Head>

      <div className={styles.container}>
        <Logo />

        <form className={styles.form}>
          <Input
            name="email"
            placeholder="Email"
            errorMessage={emailError}
            value={emailValue}
            onChange={(event) => {
              if (emailValue) {
                setEmailError("");
              }
              setEmailValue(event.target.value);
            }}
          />
          <Input
            name="password"
            placeholder="Пароль"
            errorMessage={passwordError}
            value={passwordValue}
            onChange={(event) => {
              if (passwordValue) {
                setPasswordError("");
              }

              setPasswordValue(event.target.value);
            }}
          />
          <Button onClick={handleSubmit}>
            {isLoginPage ? "Вход" : "Регистрация"}
          </Button>
        </form>

        {isLoginPage ? (
          <span>
            Еще нет аккаунта?
            <Link href="/registration" passHref>
              <a className={styles.link}> Регистрация</a>
            </Link>
          </span>
        ) : (
          <span>
            Уже есть аккаунт?
            <Link href="/login" passHref>
              <a className={styles.link}> Войти</a>
            </Link>
          </span>
        )}
      </div>
    </>
  );
};

export default Auth;
