import styles from "./styles.module.scss";
import Link from "next/link";

import CustomImage from "../../common/CustomImage";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles["image-link"]}>
          <CustomImage
            src="/CatalogIcon.svg"
            alt="CatalogIcon"
            className={styles["catalog-icon"]}
          />

          <Link href="/catalog">
            <a>Поиск по каталогу</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>О компании</a>
          </Link>
        </li>

        <li>
          <Link href="/help">
            <a>Помощь</a>
          </Link>
        </li>

        <li>
          <Link href="/preorder">
            <a>Предзаказ препаратов</a>
          </Link>
        </li>

        <li>
          <Link href="/asd">
            <a>Доставка и Оплата</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
