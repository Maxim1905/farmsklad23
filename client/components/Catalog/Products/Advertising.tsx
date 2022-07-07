import Slider from "react-slick";

import CustomImage from "../../common/CustomImage";
import styles from "./styles.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const Advertising = () => (
  <Slider {...settings}>
    <CustomImage
      className={styles.mokkImage}
      src="/MokkImage.png"
      alt="MokkImage"
    />
    <CustomImage
      className={styles.mokkImage}
      src="/MokkImage.png"
      alt="MokkImage"
    />
  </Slider>
);

export default Advertising;
