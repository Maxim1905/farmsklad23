import styles from "./styles.module.scss";

import Blocks from "./Blocks";

const Helpfull = () => (
  <div className={styles.container}>
    <h3 className={styles.title}>Популярные категории</h3>

    <Blocks />
  </div>
);

export default Helpfull;
