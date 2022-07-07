import Slider from "react-slick";

import CustomImage from "../../common/CustomImage";
import Arrow from "../../common/Arrow";
import styles from "./styles.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  autoplay: true,
  autoplaySpeed: 5000,
};

const TopSlider = () => (
  <Slider {...settings}>
    <CustomImage
      src="/MokkImage1.png"
      alt="MokkImage1"
      className={styles.image}
    />
    <CustomImage
      src="/MokkImage1.png"
      alt="MokkImage1"
      className={styles.image}
    />
  </Slider>
);

export default TopSlider;
