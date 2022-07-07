import Accordion from "../common/Accordion";

import styles from "./styles.module.scss";

const AccordionContent = () => (
  <div className={styles["accordion-content"]}>
    Индивидуальная непереносимость компонентов.
    <br />
    Перед применением рекомендуется проконсультироваться с врачом
  </div>
);

const AccordionContentAddress = () => (
  <div className={styles["accordion-content"]}>
    ПН-ВС С 8:00 - 20:00
    <br />
    Без обеда
  </div>
);

const MOKK_INSTRUCTION = [
  "Состав",
  "Фармакологическое действие",
  "Показания",
  "Противопоказания",
  "Побочные действия",
  "Способ применения и дозы",
  "Специальные указания",
  "Условия отпуска из аптек",
];

const MOKK_LOCATIONS = [
  {name: "Доктор Столетов", address: "Краснодар, ул. Дзержинского, 100Б"},
  {name: "Супераптека", address: "Краснодар, ул. Дзержинского, 100Б"},
  {name: "Доктор Столетов", address: "Краснодар, ул. Дзержинского, 100Б"},
  {name: "Апрель", address: "Краснодар, ул. Дзержинского, 100Б"},
];

const Instructions = () => {
  return (
    <div className={styles.instruction}>
      <div className={styles["instruction-column"]}>
        <span className={styles["instruction-title"]}>Инструкция</span>

        {MOKK_INSTRUCTION.map((item) => (
          <Accordion title={item} key={item}>
            <AccordionContent />
          </Accordion>
        ))}
      </div>

      <div className={styles["instruction-column"]}>
        <span className={styles["instruction-title"]}>
          Самовывоз в Краснодаре
        </span>

        {MOKK_LOCATIONS.map(({name, address}) => (
          <Accordion
            title={
              <div className={styles.location}>
                <span className={styles["location-name"]}>{name}</span>
                <span className={styles["location-address"]}>{address}</span>
              </div>
            }
            key={name}
          >
            <AccordionContentAddress />
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
