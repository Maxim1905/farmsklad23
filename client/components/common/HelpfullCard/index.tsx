import styles from "./styles.module.scss";
import CustomImage from "../../common/CustomImage";
import {useRouter} from "next/router";

type helpfullCardProps = {
  id: number;
  title: string;
  description: string;
};

const HelpfullCard = ({id, title, description}: helpfullCardProps) => {
  const {push} = useRouter();

  return (
    <div className={styles.container}>
      <CustomImage
        src="/MokkHelpfullImage.png"
        alt="MokkHelpfullImage"
        className={styles.cover}
      />
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
      <div className={styles["read-more"]} onClick={() => push(`/help/${id}`)}>
        Читать далее
      </div>
    </div>
  );
};

export default HelpfullCard;
