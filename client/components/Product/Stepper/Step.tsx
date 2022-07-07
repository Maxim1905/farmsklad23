import styles from "./styles.module.scss";

type stepProps = {
  isActive?: boolean;
  text?: string;
  number?: number;
};

const Step = ({isActive, number, text}: stepProps) => (
  <>
    <div className={styles.step}>
      <div
        className={styles.circle}
        style={{
          background: isActive ? "#f7c206" : "#dfdfdf",
        }}
      >
        {number}
      </div>
      <span className={styles.text}>{text}</span>
    </div>

    <div className={styles.divider} />
  </>
);

export default Step;
