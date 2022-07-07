import styles from "./styles.module.scss";
import {cnb} from "cnbuilder";
import {ReactElement} from "react";

type buttonProps = {
  disabled?: boolean;
  children: ReactElement | string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({
  disabled,
  children,
  className,
  onClick,
  type = "button",
}: buttonProps) => (
  <button
    className={cnb(styles.button, className)}
    onClick={onClick && onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
