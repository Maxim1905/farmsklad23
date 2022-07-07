import {cnb} from "cnbuilder";
import React, {useEffect} from "react";
import styles from "./styles.module.scss";

type modalProps = {
  isOpen: boolean;
  fromBottom?: boolean;
  className?: string;
  containerClassName?: string;
  children?: any;
  onClose: any;
};

const Modal = ({
  isOpen,
  className,
  containerClassName,
  children,
  onClose,
}: modalProps) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflowY = "hidden";
      return;
    }

    body.style.overflowY = "auto";
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div
      className={cnb(styles.overlay, className, {
        [styles["modal-open"]]: isOpen,
      })}
      onClick={onClose}
    >
      <div
        className={cnb(styles.container, containerClassName, {
          [styles["container-open"]]: isOpen,
        })}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen
);
