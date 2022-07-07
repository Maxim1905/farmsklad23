import styles from "./styles.module.scss";

import {cnb} from "cnbuilder";

import CustomImage from "../../../common/CustomImage";

const FirstBlock = () => (
  <div className={cnb(styles.first, styles["horizontal-block"])}>
    <CustomImage src="/VitaminsCoverImage.png" alt="VitaminsCoverImage" />

    <span className={cnb(styles["block-title"], styles["block-title_first"])}>
      Витамины
    </span>
  </div>
);

const SecondBlock = () => (
  <div className={cnb(styles.second, styles["horizontal-block"])}>
    <CustomImage
      src="/TeasAndHerbsCoverImage.png"
      alt="TeasAndHerbsCoverImage"
    />
    <span className={cnb(styles["block-title"], styles["block-title_second"])}>
      Чаи и травы
    </span>
  </div>
);

const ThirdBlock = () => (
  <div className={cnb(styles.third, styles["horizontal-block"])}>
    <CustomImage
      src="/WeightControlCoverImage.png"
      alt="WeightControlCoverImage"
    />
    <span className={cnb(styles["block-title"], styles["block-title_third"])}>
      Контроль веса
    </span>
  </div>
);

const FourthBlock = () => (
  <div className={cnb(styles.fourth, styles["horizontal-block"])}>
    <CustomImage src="/AntiviralCoverImage.png" alt="AntiviralCoverImage" />
    <span className={cnb(styles["block-title"], styles["block-title_fourth"])}>
      Противовирусные
    </span>
  </div>
);

const FifthBlock = () => (
  <div className={styles.fifth}>
    <CustomImage
      src="/CosmeticProductsCoverImage.png"
      alt="CosmeticProductsCoverImage"
    />

    <span className={cnb(styles["block-title"], styles["block-title_fifth"])}>
      Косметические средства
    </span>
  </div>
);

const Helpfull = () => (
  <>
    <div className={styles.grid}>
      <FirstBlock />
      <SecondBlock />

      <ThirdBlock />
      <FourthBlock />

      <FifthBlock />
    </div>

    {/* <div className={styles.flex}>
      <div className={styles["horizontal-blocks"]}>
        <div className={styles.flex}></div>

        <div className={styles.flex}></div>
      </div>
    </div> */}
    {/* 
    <div className={styles.column}>
      <FirstBlock />

      <SecondBlock />

      <ThirdBlock />

      <FourthBlock />

      <FifthBlock />
    </div> */}
  </>
);

export default Helpfull;
