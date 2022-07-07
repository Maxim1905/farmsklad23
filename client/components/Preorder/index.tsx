import {useContext, useEffect} from "react";

import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";

import Head from "next/head";
import styles from "./styles.module.scss";
import Button from "../common/Button";
import Input from "../common/Input";
import Textarea from "../common/Textarea";
import SearchInput from "../common/SearchInput";

const Preorder = () => {
  const user = useContext(UserContext);

  const {push} = useRouter();

  useEffect(() => {
    if (!user.isAuth) {
      push("/login");
    }
  }, [user.isAuth]);

  return (
    <>
      <Head>
        <title>Предзаказ</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Предзаказ препаратов</h1>
        <span className={styles.subtitle}>
          Заполните форму и мы закрепим за вами заявку на дефицитные
          лекарственные средства.
        </span>

        <SearchInput className={styles.search} />

        <form
          className={styles.content}
          onSubmit={(event) => {
            event.preventDefault();

            const {name, email, phone, medicineName} = event.target as any;

            fetch(
              `https://api.telegram.org/bot5535233527:AAHsuuXNd1dlQBQ53IsPWjy3VwPiZ1zjzgc/sendMessage?chat_id=538196935&text=    ПРЕДЗАКАЗ:   Имя - ${name.value};   Почта - ${email.value};   Номер - ${phone.value};   Название препарата - ${medicineName.value};`,
              {method: "GET"}
            );
          }}
        >
          <span className={styles.subtitle}>Препарата нет в списке?</span>

          <Textarea
            placeholder="Введите название препарата для предзаказа"
            className={styles["medicine-name"]}
            name="medicineName"
          />

          <div className={styles["user-data"]}>
            <Input name="name" placeholder="Имя*" />
            <Input name="phone" placeholder="Телефон*" />
            <Input name="email" placeholder="Электронная почта" />
          </div>

          <Button type="submit" className={styles["submit-button"]}>
            Отправить предзаказ
          </Button>
        </form>

        <span className={styles.subtitle}>
          Почему, некоторые медикаменты доступны по предзаказу?
        </span>

        <p className={styles.explanation}>
          С учётом сложившейся международной обстановки, новая модель
          организационной деятельности не оставляет шанса для прогресса
          профессионального сообщества. Банальные, но неопровержимые выводы, а
          также тщательные исследования конкурентов, вне зависимости от их
          уровня, должны быть превращены в посмешище, хотя само их существование
          приносит несомненную пользу обществу.
          <br />
          <br />
          Таким образом, укрепление и развитие внутренней структуры
          предоставляет широкие возможности для поэтапного и последовательного
          развития общества. Имеется спорная точка зрения, гласящая примерно
          следующее: явные признаки победы институционализации лишь добавляют
          фракционных разногласий и заблокированы в рамках своих собственных
          рациональных ограничений. В частности, выбранный нами инновационный
          путь однозначно фиксирует необходимость форм воздействия. Равным
          образом, социально-экономическое развитие обеспечивает актуальность
          направлений прогрессивного развития. Высокий уровень вовлечения
          представителей целевой аудитории является четким доказательством
          простого факта: повышение уровня гражданского сознания обеспечивает
          широкому кругу (специалистов) участие в формировании анализа
          существующих паттернов поведения. Повседневная практика показывает,
          что высокое качество позиционных исследований выявляет срочную
          потребность кластеризации усилий.
        </p>
      </div>
    </>
  );
};

export default Preorder;
