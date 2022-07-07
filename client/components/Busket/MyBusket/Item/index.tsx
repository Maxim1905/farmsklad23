import styles from "./styles.module.scss";
import CustomImage from "../../../common/CustomImage";
import Counter from "../../../common/ProductCard/Counter";

const Products = () => {
  return (
    <li className={styles.container}>
      <div className={styles["pickup-only_mobile"]}>Только самовывоз</div>

      <CustomImage
        src="/MedicineMokkImage.png"
        alt="MedicineMokkImage"
        className={styles.image}
      />

      <div className={styles["name-block"]}>
        <div className={styles["pickup-only"]}>Только самовывоз</div>

        <span className={styles.name}>Витамин В6 таблетки БАД 5мг, №50</span>
        <span className={styles.firm}>Vitascience</span>
      </div>

      <span className={styles.price}>340 ₽</span>

      <Counter className={styles.counter} />

      <span className={styles.sum}>680 ₽</span>

      <div className={styles["mobile-view-wrapper"]}>
        <Counter className={styles["counter_mobile"]} />

        <span className={styles["sum_mobile"]}>680 ₽</span>
      </div>
    </li>
  );
};

export default Products;
