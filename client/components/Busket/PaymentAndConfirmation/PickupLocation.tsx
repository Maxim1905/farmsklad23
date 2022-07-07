import styles from "./styles.module.scss";

const PickupLocation = () => (
  <div className={styles["pickup-location"]}>
    <span className={styles.title}>Самовывоз из аптеки</span>

    <div className={styles["address-item_info"]}>
      <span className={styles["address-item_info-location "]}>
        ул. Дзержинского, 100Б
      </span>
      <span className={styles["text-small"]}>Доктор Столетов</span>
      <span className={styles["text-small"]}>пн-вс 8:00 - 20:00 Без обеда</span>
      <span className={styles["text-small"]}>
        Хранение до <strong>5 апреля</strong>
      </span>
    </div>
  </div>
);

export default PickupLocation;
