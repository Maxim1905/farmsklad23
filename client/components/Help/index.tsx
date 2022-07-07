import {useContext, useEffect, useState} from "react";

import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";
import Head from "next/head";
import styles from "./styles.module.scss";
import CustomImage from "../common/CustomImage";

import PopularQuestions from "./PopularQuestions";
import DocumentsAndLicenses from "./DocumentsAndLicenses";

const Help = () => {
  const [isPopularQuestions, setIsPopularQuestions] = useState(true);

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
        <title>Помощь</title>
      </Head>

      <div>
        <h1 className={styles.title}>Популярные вопросы</h1>

        <div className={styles.content}>
          <div className={styles.menu}>
            <div
              className={styles["menu-title"]}
              style={{color: isPopularQuestions && "#269E9C"}}
              onClick={() => setIsPopularQuestions(true)}
            >
              {isPopularQuestions ? (
                <CustomImage
                  src="/MinusIcon.svg"
                  alt="MinusIcon"
                  className={styles.minusIcon}
                />
              ) : (
                <CustomImage
                  className={styles.plusIcon}
                  src="/PlusIcon.svg"
                  alt="PlusIcon"
                />
              )}
              Популярные вопросы
            </div>

            <div
              className={styles["menu-title"]}
              style={{color: !isPopularQuestions && "#269E9C"}}
              onClick={() => setIsPopularQuestions(false)}
            >
              {!isPopularQuestions ? (
                <CustomImage
                  src="/MinusIcon.svg"
                  alt="MinusIcon"
                  className={styles.minusIcon}
                />
              ) : (
                <CustomImage
                  className={styles.plusIcon}
                  src="/PlusIcon.svg"
                  alt="PlusIcon"
                />
              )}
              Документы и лицензии
            </div>
          </div>

          {isPopularQuestions ? <PopularQuestions /> : <DocumentsAndLicenses />}
        </div>
      </div>
    </>
  );
};

export default Help;
