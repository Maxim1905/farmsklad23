import {useContext, useEffect, useState} from "react";

import Head from "next/head";
import {useRouter} from "next/router";

import {MOKK_INSTRUCTION} from "../constants";
import {UserContext} from "../../contexts/userContext";

import Stepper from "./Stepper";
import Counter from "../common/ProductCard/Counter";
import InfoPopup from "../common/ProductCard/InfoPopup";
import Button from "../common/Button";

import CustomImage from "../common/CustomImage";
import Info from "./Info";
import Instructions from "./Instructions";
import Certificates from "./Certificates";

import styles from "./styles.module.scss";
import {getOneDevice} from "../../http/deviceAPI";

type productProps = {
  img: string;
  activeSubstance: string;
  country: string;
  dosage: string;
  expirationDate: string;
  methodOfApplication: string;
  manufacturer: string;
  name: string;
  releaseForm: string;
  storageConditions: string;
  price: number;
};

const Product = () => {
  const {query} = useRouter();
  const [product, setProduct] = useState<productProps>();

  useEffect(() => {
    getOneDevice(query.product).then((data) => {
      setProduct(data);
    });
  }, []);

  const {name, img, price, ...info} = product || {};

  return (
    <>
      <Head>
        <title>Продукт</title>
      </Head>

      <div>
        <div className={styles.content}>
          <div className={styles["image-wrapper"]}>
            <CustomImage
              src={`http://localhost:5000/${img}`}
              alt="MedicineMokkImage"
              className={styles.medicineImage}
            />

            <span className={styles.note}>
              Внешний вид товара может <br /> отличаться от изображенного
            </span>
          </div>

          <div className={styles.description}>
            <div className={styles["busket-block"]}>
              <div className={styles["title-block"]}>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles["pickup-only"]}>Только самовывоз</div>
              </div>

              <div className={styles["price-block"]}>
                <div className={styles["price-value"]}>
                  <div className={styles.price}>{price} ₽</div>
                  <div className={styles.cashback}>+3 ₽ на карту</div>
                </div>

                <div className={styles["info-block"]}>
                  <InfoPopup />
                  <div className={styles["info-in-stock"]}>В наличии 32 шт</div>
                </div>
              </div>

              <Counter className={styles.counter} />

              <Button className={styles["busket-button"]}>В корзину</Button>
            </div>

            <Info {...info} />
          </div>
        </div>

        <div className={styles["stepper-wrapper"]}>
          <Stepper steps={MOKK_INSTRUCTION} />
        </div>

        <Instructions />
        <Certificates />
      </div>
    </>
  );
};

export default Product;
