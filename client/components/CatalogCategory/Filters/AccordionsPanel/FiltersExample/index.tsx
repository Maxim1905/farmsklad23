import styles from "./styles.module.scss";

import Checkbox from "../../../../common/Checkbox";

const FiltersExample = () => (
  <div className={styles.container}>
    <Checkbox onChange={() => {}} label="Прием внутрь" />
    <Checkbox onChange={() => {}} label="Наружное применение" />
    <Checkbox onChange={() => {}} label="Для инъекций и инфузий" />
  </div>
);

export default FiltersExample;
