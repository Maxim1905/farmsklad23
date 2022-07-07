import styles from "./styles.module.scss";

import {CATALOG_OF_MEDICINES, HELP, DOCUMENTATION} from "./constants";

import Logo from "../common/Logo";
import BonusCardButton from "../common/BonusCardButton";
import CustomImage from "../common/CustomImage";
import Topic from "./Topic";
import {cnb} from "cnbuilder";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Logo isWhite />

      <div className={styles.content}>
        <div className={styles["footer-menu_left-block"]}>
          <div className={styles["footer-menu"]}>
            <Topic title="Каталог медикаментов" list={CATALOG_OF_MEDICINES} />
            <Topic title="Помощь" list={HELP} />
            <Topic title="Документация" list={DOCUMENTATION} />
          </div>

          <div className={styles["footer-menu_legal-information"]}>
            <span className={styles["footer-menu_legal-information-warning"]}>
              Имеются противопоказания. Необходима консультация специалиста
            </span>

            <span className={styles["footer-menu_legal-information-data"]}>
              © 2022 «Фармсклад»
            </span>

            <span className={styles["footer-menu_legal-information-data"]}>
              ИП «данные ИП»
            </span>

            <span className={styles["footer-menu_legal-information-data"]}>
              Юридический адрес: 614077, Краснодарский край, г. Краснодар, ул.
              Длинная 66
            </span>
          </div>
        </div>

        <div className={styles["footer-menu_right-block"]}>
          <span className={styles["footer-menu_right-block-text"]}>
            Получайте выгоду за покупки
            <br />
            по нашей бонусной карте
          </span>

          <BonusCardButton />

          <span className={styles["footer-warning"]}>
            Имеются противопоказания. Необходима консультация специалиста
          </span>

          <span className={styles["footer-menu_right-block-text"]}>
            Скачать мобильное
            <br />
            приложение Фармсклад 23
          </span>

          <CustomImage
            src="/AppStoreImage.png"
            alt="AppStoreImage"
            className={cnb(
              styles.storeIcon,
              styles["footer-menu_right-block_store-link"]
            )}
          />

          <CustomImage
            src="/GooglePlayImage.png"
            alt="GooglePlayImage"
            className={styles.storeIcon}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
