import {cnb} from "cnbuilder";
import styles from "./styles.module.scss";

type textareaProps = {
  placeholder?: string;
  className?: string;
  name?: string;
};

const Textarea = ({placeholder, className, name}: textareaProps) => (
  <textarea
    name={name}
    className={cnb(styles.input, className)}
    placeholder={placeholder}
  />
);

export default Textarea;
