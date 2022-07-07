import {useContext, useState} from "react";

import styles from "./styles.module.scss";

import Button from "../common/Button";
import CreateCategoryModal from "./CreateCategoryModal";
import CreateProductModal from "./CreateProductModal";
import Modal from "../common/Modal";
import {UserContext} from "../../contexts/userContext";
import {useRouter} from "next/router";

const Admin = () => {
  const {user} = useContext(UserContext);
  const {push} = useRouter();

  const [isOpenCreateCategory, setIsOpenCreateCategory] =
    useState<boolean>(false);

  const [isOpenCreateProduct, setIsOpenCreateProduct] =
    useState<boolean>(false);

  if (user.role !== "ADMIN") {
    push("/");

    return <></>;
  }
  return (
    <div className={styles.container}>
      <Button onClick={() => setIsOpenCreateCategory(true)}>
        Создать категорию
      </Button>

      <Button onClick={() => setIsOpenCreateProduct(true)}>
        Создать продукт
      </Button>

      <Button className={styles.toMain} onClick={() => push("/")}>
        На главную
      </Button>

      <CreateCategoryModal
        isOpen={isOpenCreateCategory}
        onClose={() => setIsOpenCreateCategory(false)}
      />

      <Modal
        isOpen={isOpenCreateProduct}
        onClose={() => setIsOpenCreateProduct(false)}
        containerClassName={styles.createProductModalContainer}
        className={styles.createProductModal}
      >
        <CreateProductModal />
      </Modal>
    </div>
  );
};

export default Admin;
