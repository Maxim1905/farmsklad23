import Image from "next/image";
import styles from "./styles.module.scss";

import SearchInput from "../../common/SearchInput";
import BasketWidget from "../../common/BasketWidget";

const Search = () => {
  return (
    <div className={styles.container}>
      <SearchInput />

      <BasketWidget className={styles.basket} />
    </div>
  );
};

export default Search;
