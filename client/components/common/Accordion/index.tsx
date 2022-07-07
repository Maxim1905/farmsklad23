import {cnb} from "cnbuilder";
import {useState, ReactNode} from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

type accordionProps = {title: string | ReactNode; children?: any};

const Accordion = ({title, children}: accordionProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.title} onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          <Image width={15} height={2} src="/MinusIcon.svg" alt="MinusIcon" />
        ) : (
          <Image width={15} height={15} src="/PlusIcon.svg" alt="PlusIcon" />
        )}

        {title}
      </div>

      <div
        className={cnb(styles["accordion-item"], {[styles.collapsed]: !isOpen})}
      >
        <div className={cnb(styles["accordion-content"])}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
