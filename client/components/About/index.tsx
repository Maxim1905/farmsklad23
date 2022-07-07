import Head from "next/head";
import styles from "./styles.module.scss";
import CustomImage from "../common/CustomImage";

import Benefits from "./Benefits";
import DetailsAndLicense from "./DetailsAndLicense";

const About = () => {
  return (
    <>
      <Head>
        <title>О компании</title>
      </Head>

      <div>
        <h1 className={styles.title}>О компании</h1>

        <div className={styles.why}>
          <div className={styles["why-text_wrapper"]}>
            <h4 className={styles["why-text_title"]}>Почему Фармсклад 23?</h4>

            <p className={styles["why-text"]}>
              Действия представителей оппозиции неоднозначны и будут
              разоблачены. Прежде всего, синтетическое тестирование требует
              определения и уточнения инновационных методов управления
              процессами! Есть над чем задуматься: базовые сценарии поведения
              пользователей неоднозначны и будут функционально разнесены на
              независимые элементы. Внезапно, реплицированные с зарубежных
              источников, современные исследования описаны максимально подробно.
              <br />
              <br />С другой стороны, высококачественный прототип будущего
              проекта создаёт предпосылки для форм воздействия.
            </p>
          </div>

          <CustomImage
            src="/AboutImage.png"
            alt="AboutImage"
            className={styles["about-image"]}
          />
        </div>

        <Benefits />

        <DetailsAndLicense />
      </div>
    </>
  );
};

export default About;
