import styles from "./styles.module.scss";
import {cnb} from "cnbuilder";
import CustomImage from "../CustomImage";
import Button from "../Button";

import Counter from "./Counter";
import InfoPopup from "./InfoPopup";

type productCardProps = {
  isPurchase?: boolean;
  name: string;
  img: string;
  company: string;
  className?: string;
  price: number;
  onClick?: () => void;
};

const ProductCard = ({
  isPurchase = true,
  name,
  company,
  className,
  img,
  price,
  onClick,
}: productCardProps) => {
  return (
    <div
      className={cnb(styles.container, className)}
      onClick={onClick && onClick}
    >
      <CustomImage
        src={`http://localhost:5000/${img}`}
        alt="medicineImage"
        className={styles["medicine-image"]}
      />

      <span className={styles.title}>{name?.slice(0, 33)}</span>
      <span className={styles.company}>{company}</span>

      <div className={styles.count}>
        <span className={styles["min-price"]}>от {price} ₽</span>

        <InfoPopup />

        {isPurchase && <Counter />}
      </div>

      {isPurchase && <Button>В корзину</Button>}
    </div>
  );
};

export default ProductCard;
