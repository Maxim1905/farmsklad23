import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../Button";
import {cnb} from "cnbuilder";

type bonusCardButtonProps = {
  className?: string;
};

const BonusCardButton = ({className}: bonusCardButtonProps) => (
  <Button className={cnb(styles.container, className)}>
    <>
      <Image
        src="/CreditCardIcon.svg"
        width={20}
        height={15}
        alt="CreditCardIcon"
        style={{marginRight: "14px"}}
      />
      Получить бонусную карту
    </>
  </Button>
);

export default BonusCardButton;
