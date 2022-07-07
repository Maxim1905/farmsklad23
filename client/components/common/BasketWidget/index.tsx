import {cnb} from "cnbuilder";
import CustomImage from "../CustomImage";
import styles from "./styles.module.scss";
import {useRouter} from "next/router";

type basketWidgetProps = {className?: string};

const BasketWidget = ({className}: basketWidgetProps) => {
  const {push} = useRouter();

  return (
    <div
      className={cnb(styles["basket-wrapper"], className)}
      onClick={() => push("/basket")}
    >
      <div className={styles["basket-counter"]}>
        <span className={styles["basket-counter-badge"]}>12</span>

        <CustomImage
          src="/BasketIcon.svg"
          className={styles["basket-icon"]}
          alt="BasketIcon"
        />
      </div>

      <div className={styles["basket-sum"]}>
        10 154 <span>₽</span>
      </div>
    </div>
  );
};

export default BasketWidget;
