import styles from "./styles.module.scss";
import CustomImage from "../../common/CustomImage";

const BonusProgram = () => (
  <div className={styles.container}>
    <h4 className={styles.title}>
      Бонусная программа «Фармсклад 23» 4% cash back
    </h4>

    <h5 className={styles.subtitle}> Гарантия лучшей цены</h5>
    <p className={styles.description}>
      Вы уже заметили, что у наз низкие цены? Мы работаем по программе “Гарантия
      лучшей цены”, если найдете цену ниже, мы сделаем вам скидку. Подробнее -
      читайте в статье...
    </p>

    <h5 className={styles.subtitle}> Бонусная программа и кеш-бек </h5>
    <p className={styles.description}>
      Получите или зарегистрируйте виртуальную карту лояльности фармсклад23 и
      накапливайте баллы с каждой покупки, у нас нет никаких скрытых условий и
      можно оплачивать до 100% стоимости медикаментов бонусными баллами. Карту
      не нужно носить с собой, скачайте приложение “фармсклад23 с эп стор или
      плей маркет и войдите в систему, так ваш код лояльности всегда будет в
      кармане.
    </p>

    <CustomImage
      src="/BonusCardImage.png"
      alt="BonusCardImage"
      className={styles.image}
    />
  </div>
);

export default BonusProgram;
