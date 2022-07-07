import styles from "./styles.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";

import {cnb} from "cnbuilder";

type navLinksListProps = {
  onClose: () => void;
};

const NavLinksList = ({onClose}: navLinksListProps) => {
  const {asPath} = useRouter();

  return (
    <nav>
      <ul className={styles.links}>
        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/",
          })}
        >
          <Link href="/catalog">
            <a>Главная</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/catalog",
          })}
        >
          <Link href="/catalog">
            <a>Поиск по каталогу</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/about",
          })}
        >
          <Link href="/about">
            <a>О компании</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/help",
          })}
        >
          <Link href="/help">
            <a>Помощь</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/preorder",
          })}
        >
          <Link href="/preorder">
            <a>Предзаказ препаратов</a>
          </Link>
        </li>

        <li
          onClick={onClose}
          className={cnb(styles["area-item"], {
            [styles["area-item_active"]]: asPath === "/dileveryAndPay",
          })}
        >
          <Link href="/dileveryAndPay">
            <a>Доставка и Оплата</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinksList;
