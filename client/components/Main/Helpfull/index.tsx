import styles from "./styles.module.scss";

import {MOKK_HELPFULL} from "../../constants";

import HelpfullCard from "../../common/HelpfullCard";

const Helpfull = () => (
  <div className={styles.container}>
    <h3 className={styles.title}> Полезное</h3>

    <div className={styles.content}>
      {MOKK_HELPFULL.map((item, index) => (
        <HelpfullCard key={index} id={index} {...item} />
      ))}
    </div>
  </div>
);

export default Helpfull;
