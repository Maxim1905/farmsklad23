import React, {useEffect, useState, useRef, ReactNode} from "react";
import styles from "./styles.module.scss";
import useOutsideClick from "./useOutsideClick";
import Image from "next/image";

import {cnb} from "cnbuilder";
import CustomImage from "../CustomImage";

type selectProps = {
  isLocatonImage?: boolean;
  onSelect: (option: Option) => void;
  selected: Option;
  values: {
    title: string;
    id: string | number;
  }[];
};

export interface Option {
  id: string | number;
  title: string;
}

const Select = ({
  isLocatonImage = true,
  onSelect,
  selected,
  values,
}: selectProps) => {
  const [showList, setShowList] = useState(false);
  const [header, setHeader] = useState(selected ?? values[0]);
  const [options, setOptions] = useState<Array<any>>([]);
  const ref = useRef<HTMLDivElement>(null);

  console.log("selected", selected);
  useEffect(() => {
    setHeader(selected || values[0]);
  }, [selected, values]);

  useEffect(() => {
    if (!values?.length) return;
    setOptions((s) => {
      let copy = [...s];
      copy = values?.filter((l) => l.id !== selected?.id);
      return copy;
    });
  }, [values]);

  useOutsideClick(ref, () => {
    setShowList(false);
  });

  useEffect(() => {
    if (!header) return;
    setShowList(false);
    setOptions((s) => {
      let copy = [...s];
      copy = values.filter((l) => l.id !== selected?.id);
      return copy;
    });
  }, [header]);

  const onClick = (option) => {
    onSelect(option);
    setHeader(option);
  };

  return (
    <>
      <div ref={ref} className={cnb({[styles.opened]: showList})}>
        <div className={styles.cover}>
          <button
            type="button"
            className={cnb([styles.header, styles.button])}
            style={{
              background: showList ? "white" : "",
              borderTop: showList ? "1px solid #eee7f3" : "",
              borderRight: showList ? "1px solid #eee7f3" : "",
              borderLeft: showList ? "1px solid #eee7f3" : "",
            }}
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <span className={styles.headerText}>
              {isLocatonImage && (
                <Image
                  src="/GeolocationIcon.svg"
                  width={20}
                  height={20}
                  alt="GeolocationIcon"
                />
              )}

              {header?.title}
            </span>

            <CustomImage
              src="/CaretDownIcon.svg"
              alt="CaretDownIcon"
              className={cnb(styles.caretIcon, {
                [styles["caret-up"]]: showList,
              })}
            />
          </button>

          {showList && (
            <div className={styles.list}>
              {options.map((option: any) => (
                <button
                  className={cnb([styles.button, styles.item])}
                  key={option.id}
                  onClick={() => onClick(option)}
                >
                  <span className={styles.text}>{option.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Select);
