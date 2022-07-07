import styles from "./styles.module.scss";

const YourOrder = () => (
  <div className={styles["your-order"]}>
    <span className={styles.title}>Ваш заказ</span>

    <div className={styles["order-wrapper"]}>
      <span className={styles["order-name"]}>
        Витамин В6 таблетки БАД 5мг, №50
      </span>

      <div className={styles["order-info"]}>
        <span> 1 990 ₽</span>
        <span> x 2</span>
      </div>
    </div>
    <div className={styles["order-wrapper"]}>
      <span className={styles["order-name"]}>
        Витамин В6 таблетки БАД 5мг, №50
      </span>

      <div className={styles["order-info"]}>
        <span> 1 990 ₽</span>
        <span> x 2</span>
      </div>
    </div>
    <div className={styles["order-wrapper"]}>
      <span className={styles["order-name"]}>
        Витамин В6 таблетки БАД 5мг, №50
      </span>

      <div className={styles["order-info"]}>
        <span> 1 990 ₽</span>
        <span> x 2</span>
      </div>
    </div>

    <div className={styles.total}>
      <div className={styles["total-value"]}>
        <span> Итого</span>
        <span> 1 990 ₽</span>
      </div>

      <div className={styles["total-other"]}>
        <span> Скидка</span>
        <span> 0 ₽</span>
      </div>

      <div className={styles["total-other"]}>
        <span> Доставка</span>
        <span> 0 ₽</span>
      </div>
    </div>

    <div className={styles["total-value"]}>
      <span> Итого к оплате</span>
      <span> 1 990 ₽</span>
    </div>
  </div>
);

export default YourOrder;
