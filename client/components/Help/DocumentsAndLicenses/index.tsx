import styles from "./styles.module.scss";
import CustomImage from "../../common/CustomImage";

const DocumentsAndLicenses = () => (
  <div className={styles.container}>
    <CustomImage
      src="/HelpLicenseOne.png"
      alt="HelpLicense"
      className={styles.image}
    />
    <CustomImage
      src="/HelpLicenseTwo.png"
      alt="HelpLicense"
      className={styles.image}
    />
    <CustomImage
      src="/HelpLicenseTree.png"
      alt="HelpLicense"
      className={styles.image}
    />
  </div>
);

export default DocumentsAndLicenses;
