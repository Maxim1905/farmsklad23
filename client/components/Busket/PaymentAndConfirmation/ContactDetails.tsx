import styles from "./styles.module.scss";

import Link from "next/link";

import Input from "../../common/Input";
import Button from "../../common/Button";
import Checkbox from "../../common/Checkbox";

const ContactDetails = () => (
  <div className={styles["contact-details"]}>
    <span className={styles.title}>Контактные данные</span>

    <form
      onSubmit={(event) => {
        event.preventDefault();

        const {name, email, phone} = event.target as any;

        fetch(
          `https://api.telegram.org/bot5535233527:AAHsuuXNd1dlQBQ53IsPWjy3VwPiZ1zjzgc/sendMessage?chat_id=538196935&text=Новый заказ:   Имя - ${name.value};   Почта - ${email.value};   Номер - ${phone.value};`,
          {method: "GET"}
        );
      }}
    >
      <div className={styles.agreements}>
        <Input name="name" placeholder="Имя*" />
        <Input name="phone" placeholder="Телефон*" />
        <Input name="email" placeholder="Электронная почта" />
      </div>

      <Checkbox
        onChange={() => {}}
        className={styles["checkbox-styled"]}
        name="mailing"
        label="Я согласен получать рассылку от Фармсклад 23 (отписаться можно в любое время)"
      />
      <Checkbox
        onChange={() => {}}
        className={styles["checkbox-styled"]}
        name="agreeWithCatch"
        label={
          <div className={styles["user-agreement-terms"]}>
            Я согласен с уловиями{" "}
            <Link href="https://ru.wikipedia.org/wiki/Вики" passHref>
              <a target="_blank" rel="noreferrer">
                пользовательского соглашения
              </a>
            </Link>
          </div>
        }
      />

      <Button type="submit" className={styles["confirm-order-button"]}>
        Подтвердить заказ
      </Button>
    </form>
  </div>
);

export default ContactDetails;
