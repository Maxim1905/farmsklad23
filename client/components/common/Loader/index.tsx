import styles from "./styles.module.scss";

const Loader = () => (
  <div className={styles["lds-ellipsis"]}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
