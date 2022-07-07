import Slider from "react-slick";
import styles from "./styles.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

import {MOKK_PRODUCTS} from "../../constants";

import ProductCard from "../../common/ProductCard";

const PupularProducts = () => (
  <>
    <h3 className={styles.title}>Популярные товары</h3>

    <Slider {...settings}>
      {MOKK_PRODUCTS.map((item) => (
        <ProductCard
          className={styles.card}
          key={item.name}
          {...item}
          isPurchase={false}
        />
      ))}
    </Slider>
  </>
);

export default PupularProducts;
