import styles from "./styles.module.scss";

const YourOrder = () => (
  <div className={styles["your-order"]}>
    <span className={styles.title}>Ваш заказ</span>

    <div className={styles["delivery-option"]}>
      <span className={styles["text-medium"]}>Итого</span>
      <span className={styles["text-large"]}>1 990 ₽</span>
    </div>

    <div className={styles["delivery-option"]}>
      <span className={styles["text-medium"]}>Скидка</span>
      <span className={styles["text-large"]}>249 ₽</span>
    </div>

    <div className={styles["delivery-option"]}>
      <span className={styles["text-medium"]}>Доставка</span>
      <span className={styles["text-large"]}>0 ₽</span>
    </div>

    <div className={styles["delivery-option"]} style={{marginTop: "52px"}}>
      <span className={styles["text-large"]}>Итого к оплате</span>
      <span className={styles["text-large"]}>1 741 ₽</span>
    </div>
  </div>
);

export default YourOrder;
