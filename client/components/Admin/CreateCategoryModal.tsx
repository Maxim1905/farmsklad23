import styles from "./styles.module.scss";
import Input from "../common/Input";
import Button from "../common/Button";
import Modal from "../common/Modal";
import {createType} from "../../http/deviceAPI";

const CreateCategoryModal = ({isOpen, onClose}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    containerClassName={styles.categoryModal}
  >
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();

        const {name} = event.target as any;

        if (!name.value)
          return alert("Название категории не может быть пстой строкой");

        createType({name: name.value})
          .then((data) => {
            alert(`Успешное создание категории ${data.name}`);
          })
          .catch((error) => {
            alert(error.response.data.message);
          });
      }}
    >
      <Input name="name" placeholder="Категория" />

      <Button type="submit">Создать категорию</Button>
    </form>
  </Modal>
);

export default CreateCategoryModal;
