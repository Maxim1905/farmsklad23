import Head from "next/head";
import styles from "./styles.module.scss";
import CustomImage from "../../common/CustomImage";

const DetailsAndLicense = () => (
  <>
    <h1 className={styles.title}>Реквизиты и лицензия</h1>

    <div className={styles.content}>
      <p className={styles.text}>
        ООО &ldquo;Фармсклад 23&rdquo;
        <br />
        <br />
        Лицензия на осуществление фармацевтической деятельности: ЛО-72-02-001319
        <br />
        <br />
        Основной вид деятельности: хранение лекарственных препаратов для
        медицинского применения, розничная торговля лекарственными препаратами
        для медицинского применения, отпуск лекарственных препаратов для
        медицинского применения.
        <br />
        <br />
        Юридический адрес: 443096, г. Краснодар, Ленинский район, ул. Дачная, д.
        15
        <br />
        ИНН: 6367650886
        <br />
        ОГРН:1026303506767
        <br />
        КПП: 631501001
        <br />
        р/c: 40702810554020100525
        <br />
        к/c: 30101810200000000607
        <br />
        Банк: в банке ОАО «Сбербанка России» г. Краснодар
      </p>

      <CustomImage
        src="/AboutLicense.png"
        alt=""
        className={styles["aboutLicense-image"]}
      />
    </div>
  </>
);

export default DetailsAndLicense;
