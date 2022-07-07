import styles from "./styles.module.scss";
import Checkbox from "../../common/Checkbox";

const PaymentMethod = () => (
  <div className={styles["payment-method"]}>
    <span className={styles.title}>Способ оплаты</span>

    <Checkbox
      onChange={() => {}}
      label="Наличными или картой при получении"
      className={styles["checkbox-styled"]}
    />

    <Checkbox
      onChange={() => {}}
      label="Картой онлайн"
      className={styles["checkbox-styled"]}
    />
  </div>
);

export default PaymentMethod;
