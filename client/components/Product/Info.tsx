import styles from "./styles.module.scss";

type infoProps = {
  activeSubstance?: string;
  country?: string;
  dosage?: string;
  expirationDate?: string;
  methodOfApplication?: string;
  manufacturer?: string;
  releaseForm?: string;
  storageConditions?: string;
};

const Info = ({
  activeSubstance,
  country,
  dosage,
  expirationDate,
  methodOfApplication,
  manufacturer,
  releaseForm,
  storageConditions,
}: infoProps) => (
  <div className={styles.info}>
    <div className={styles["info-title"]}>Производитель:</div>
    <div className={styles["info-description"]}>{manufacturer}</div>

    <div className={styles["info-title"]}>Форма выпуска:</div>
    <div className={styles["info-description"]}>{releaseForm}</div>

    <div className={styles["info-title"]}>Способ применения:</div>
    <div className={styles["info-description"]}>{methodOfApplication}</div>

    <div className={styles["info-title"]}>Условия хранения:</div>
    <div className={styles["info-description"]}>{storageConditions}</div>

    <div className={styles["info-title"]}> Активное вещество:</div>
    <div className={styles["info-description"]}>{activeSubstance}</div>

    <div className={styles["info-title"]}>Дозировка:</div>
    <div className={styles["info-description"]}>{dosage}</div>

    <div className={styles["info-title"]}>Срок годности:</div>
    <div className={styles["info-description"]}>{expirationDate}</div>

    <div className={styles["info-title"]}>Страна:</div>
    <div className={styles["info-description"]}>{country}</div>
  </div>
);

export default Info;
