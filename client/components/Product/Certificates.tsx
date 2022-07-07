import CustomImage from "../common/CustomImage";

import styles from "./styles.module.scss";

const Certificates = () => {
  return (
    <div className={styles["certificates-container"]}>
      <div className={styles["certificates-title"]}>Сертификаты</div>

      <div className={styles["certificates"]}>
        <CustomImage
          src="/CertificateImage.png"
          alt="CertificateImage"
          className={styles["certificate"]}
        />
        <CustomImage
          src="/CertificateImage.png"
          alt="CertificateImage"
          className={styles["certificate"]}
        />
        <CustomImage
          src="/CertificateImage.png"
          alt="CertificateImage"
          className={styles["certificate"]}
        />
      </div>
    </div>
  );
};

export default Certificates;
