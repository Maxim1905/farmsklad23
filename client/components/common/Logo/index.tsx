import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";

import {useRouter} from "next/router";

import {cnb} from "cnbuilder";

type logoProps = {
  isWhite?: boolean;
};

const Logo = ({isWhite = false}: logoProps) => {
  const {push} = useRouter();

  return (
    <div
      className={cnb(styles["logo-block"], {
        [styles["logo-block_white"]]: isWhite,
      })}
      onClick={() => push("/")}
    >
      <CustomImage src="/LogoIcon.svg" className={styles.logo} alt="LogoIcon" />

      <div>
        <h1 className={styles["logo-block_title"]}>ФАРМСКЛАД 23</h1>
        <h3 className={styles["logo-block_subtitle"]}>
          Удобная доставка медикаментов на дом
        </h3>
      </div>
    </div>
  );
};

export default Logo;
