import styles from "./styles.module.scss";

import AccordionsPanel from "./AccordionsPanel";
import MultiRangeSlider from "./MultiRangeSlider";

const Filters = () => {
  return (
    <div className={styles.container}>
      <AccordionsPanel />

      <span className={styles.price}>Цена</span>

      <MultiRangeSlider max={4562} min={0} onChange={() => {}} />
    </div>
  );
};

export default Filters;
