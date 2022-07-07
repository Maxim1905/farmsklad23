import styles from "./styles.module.scss";
import {MOKK_POPULAR_QUESTIONS} from "../../constants";
import Accordion from "../../common/Accordion";

const PopularQuestions = () => (
  <div className={styles.container}>
    {MOKK_POPULAR_QUESTIONS.map((item) => (
      <Accordion key={item} title={item}>
        <p className={styles["accordion-content"]}>
          Все аптеки, подключенные к сервису, лицензированы государством.
          Продаваемая продукция строго контролируется законодательством.
        </p>
      </Accordion>
    ))}
  </div>
);

export default PopularQuestions;
