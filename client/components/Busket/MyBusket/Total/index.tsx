import styles from "./styles.module.scss";
import Button from "../../../common/Button";
import CustomImage from "../../../common/CustomImage";
import Image from "next/image";

import {useRouter} from "next/router";

const Total = ({setCurrentStepIndex}) => {
  const {push} = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles["info-block"]}>
        <CustomImage
          className={styles["info-image"]}
          src="/InfoIcon.svg"
          alt="InfoIcon"
        />

        <p className={styles.info}>
          Обратите внимание, если в корзине есть товары, отпускаемые по рецепту,
          оформить доставку будет невозможно.
          <br />
          <br />В таком случае вы можете оплатить покупку и забрать препараты в
          ближайшей аптеке лично по предъявлению чека.
        </p>
      </div>

      <div className={styles["actions-block"]}>
        <div className={styles["total_actions-name"]}>Итого</div>
        <div className={styles["total_actions-value"]}>1 741 ₽</div>

        <div className={styles["total-paid_actions-name"]}>Итого к оплате</div>
        <div className={styles["total-paid_actions-value"]}>1 741 ₽</div>

        <Button
          className={styles["continue-shopping-button"]}
          onClick={() => push("/")}
        >
          Продолжить покупки
        </Button>

        <Button
          className={styles["checkout-button"]}
          onClick={() => {
            setCurrentStepIndex((prevValue) => prevValue + 1);
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default Total;
