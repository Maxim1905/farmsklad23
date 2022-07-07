import {useContext, useEffect} from "react";

import Head from "next/head";
import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";

import CategoriesList from "./CategoriesList";
import Products from "./Products";

import styles from "./styles.module.scss";

const CatalogCategory = () => {
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
        <title>Каталог</title>
      </Head>

      <h3 className={styles.title}>Категории</h3>

      <div className={styles.container}>
        <CategoriesList />
        <Products />
      </div>
    </>
  );
};

export default CatalogCategory;
