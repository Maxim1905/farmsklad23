import styles from "./styles.module.scss";

import Item from "./Item";
import Total from "./Total";

const MOKK_STEPS = [
  "Моя корзина",
  "Способ получения",
  "Оплата и подтверждение",
];

const Busket = ({setCurrentStepIndex}) => {
  return (
    <>
      <div className={styles.thead}>
        <div />
        <div />
        <div>Цена</div>
        <div>Количество</div>
        <div>Сумма</div>
      </div>

      <ul className={styles.products}>
        <Item />
        <Item />
        <Item />
      </ul>

      <Total setCurrentStepIndex={setCurrentStepIndex} />
    </>
  );
};

export default Busket;
