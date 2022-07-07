import styles from "./styles.module.scss";

import CustomImage from "../../common/CustomImage";

const Benefits = () => (
  <>
    <p className={styles.tagline}>
      Равным образом, внедрение современных методик создаёт необходимость
      включения в производственный план целого ряда внеочередных мероприятий с
      учётом комплекса благоприятных перспектив.
    </p>

    <div className={styles.benefits}>
      <div className={styles.benefit}>
        <CustomImage
          src="/CheckCircleIcon.svg"
          alt="CheckCircleIcon"
          className={styles["benefit-image"]}
        />

        <p>Народная аптека в Краснодаре - всегда рядом.</p>
      </div>
      <div className={styles.benefit}>
        <CustomImage
          src="/CheckCircleIcon.svg"
          alt="CheckCircleIcon"
          className={styles["benefit-image"]}
        />

        <p>Программа лояльности Гарантия лучшей цены и выгодный cash back.</p>
      </div>
      <div className={styles.benefit}>
        <CustomImage
          src="/CheckCircleIcon.svg"
          alt="CheckCircleIcon"
          className={styles["benefit-image"]}
        />

        <p>
          Заказать доставку домой или оформить предзаказ дефицитных препаратов
          можно сразу на сайте.
        </p>
      </div>
      <div className={styles.benefit}>
        <CustomImage
          src="/CheckCircleIcon.svg"
          alt="CheckCircleIcon"
          className={styles["benefit-image"]}
        />

        <p>
          Попробуйте уже сейчас, выберите категорию или воспользуйтесь быстрым
          поиском.
        </p>
      </div>
    </div>
  </>
);

export default Benefits;
