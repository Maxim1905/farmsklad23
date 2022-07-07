import {useState, useEffect} from "react";

import Head from "next/head";
import {useRouter} from "next/router";
import ProductCard from "../common/ProductCard";
import CustomImage from "../common/CustomImage";
import Modal from "../common/Modal";

import {getDevices} from "../../http/deviceAPI";

import Filters from "./Filters";

import styles from "./styles.module.scss";

const CatalogPage = () => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);
  const [isOpenSort, setIsOpenSort] = useState<boolean>(false);

  const [products, setProducts] = useState({rows: [], count: 0});

  const [productsCount, setProductsCount] = useState(10);

  const {
    query: {category},
    push,
  } = useRouter();

  useEffect(() => {
    getDevices(category, 1, productsCount).then((data) => {
      setProducts(data);
    });
  }, [category, productsCount]);

  return (
    <>
      <Head>
        <title>Категория</title>
      </Head>

      <div className={styles.container}>
        <h3 className={styles.title}>
          Витамины <span>(123)</span>
        </h3>

        <div className={styles["filters-mobile"]}>
          <div
            className={styles["filters-mobile_title"]}
            onClick={() => setIsOpenFilters(true)}
          >
            Фильтры &nbsp;
            <CustomImage
              src="/FilterIcon.svg"
              alt="FilterIcon"
              className={styles.icon}
            />
          </div>

          <div
            className={styles["filters-mobile_title"]}
            onClick={() => setIsOpenSort(true)}
          >
            Сортировка &nbsp;
            <CustomImage
              src="/SortIcon.svg"
              alt="SortIcon"
              className={styles.icon}
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles["filters-wrapper"]}>
            <Filters />
          </div>

          <div className={styles.products}>
            <div className={styles.medicines}>
              {products.rows.map((item) => (
                <ProductCard
                  key={item.id}
                  onClick={() => push(`/catalog/${category}/${item.id}`)}
                  {...item}
                />
              ))}
            </div>

            {products.count !== products.rows.length && (
              <div className={styles["show-more"]}>
                <button
                  className={styles["show-more_button"]}
                  onClick={() => setProductsCount(productsCount + 10)}
                >
                  Показать еще
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpenFilters} onClose={() => setIsOpenFilters(false)}>
        <Filters />
      </Modal>

      <Modal isOpen={isOpenSort} onClose={() => setIsOpenSort(false)}>
        <Filters />
      </Modal>
    </>
  );
};

export default CatalogPage;
