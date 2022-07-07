import {useState} from "react";
import styles from "./styles.module.scss";

import Image from "next/image";

import {cnb} from "cnbuilder";

type counterProps = {
  className?: string;
};

const Counter = ({className}: counterProps) => {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  };

  const handleDecrement = () => {
    if (!countValue) return;

    setCountValue(countValue - 1);
  };

  return (
    <div className={cnb(styles["count-actions"], className)}>
      <button className={styles["count-button"]} onClick={handleDecrement}>
        <Image width={15} height={2} src="/MinusIcon.svg" alt="MinusIcon" />
      </button>

      <span className={styles["count-value"]}>{countValue}</span>

      <button className={styles["count-button"]} onClick={handleIncrement}>
        <Image width={15} height={15} src="/PlusIcon.svg" alt="PlusIcon" />
      </button>
    </div>
  );
};

export default Counter;
