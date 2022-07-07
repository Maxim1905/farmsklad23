import {cnb} from "cnbuilder";

import Image from "next/image";
import styles from "./styles.module.scss";

type customImageProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
};

const CustomImage = ({onClick, src, alt, className}: customImageProps) => (
  <div className={cnb(styles.default, className)} onClick={onClick}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mNc8vSxMQMRgHFUIX0VAgDnZhpBNePs7gAAAABJRU5ErkJggg=="
    />
  </div>
);

export default CustomImage;
