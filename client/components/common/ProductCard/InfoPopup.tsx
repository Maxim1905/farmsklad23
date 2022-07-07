import styles from "./styles.module.scss";

import Image from "next/image";

const InfoPopup = () => (
  <div className={styles["info-block"]}>
    <Image width={24} height={24} src="/InfoIcon.svg" alt="InfoIcon" />

    <span className={styles["info-text"]}>
      Указана минимально возможная цена на товар в городе.
      <br />
      <br />
      Цены на товар в разных аптеках отличаются.
    </span>
  </div>
);

export default InfoPopup;
