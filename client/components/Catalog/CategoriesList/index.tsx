import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getTypes} from "../../../http/deviceAPI";

import styles from "./styles.module.scss";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const {push} = useRouter();

  useEffect(() => {
    getTypes().then((data) => setCategories(data));
  }, []);

  return (
    <ul className={styles["categories-list"]}>
      {categories.map(({name, id}) => (
        <li
          key={id}
          className={styles.category}
          onClick={() => {
            push(`/catalog/${id}`);
          }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
