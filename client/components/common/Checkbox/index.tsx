import {cnb} from "cnbuilder";
import React from "react";
import styles from "./styles.module.scss";

type checkboxProps = {
  label?: string | React.ReactElement;
  className?: string;
  name?: string;
  onChange: Function;
};

const Checkbox = ({className, label, name, onChange}: checkboxProps) => {
  const id = Math.random().toString(16).slice(2);

  return (
    <div className={cnb(styles.container, className)}>
      <input
        className={styles.input}
        type="checkbox"
        id={id}
        onChange={(e) => onChange(e)}
        name={name}
      />

      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
