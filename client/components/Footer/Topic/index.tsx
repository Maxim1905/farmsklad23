import styles from "./styles.module.scss";

type topicProps = {
  title: string;
  list: string[];
};

const Topic = ({title, list}: topicProps) => {
  return (
    <div className={styles.container}>
      <h5 className={styles["topic-title"]}>{title}</h5>

      <ul className={styles["topic-list"]}>
        {list.map((item) => (
          <li key={item} className={styles["topic-list_item"]}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
