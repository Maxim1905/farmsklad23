import styles from "./styles.module.scss";
import Button from "../../common/Button";

import {MOKK_ADDRESSES} from "../../constants";

const Addresses = ({currentCoordinates, setMapState}) => (
  <div className={styles.addresses}>
    <span className={styles.title}>Выбрать аптеку</span>

    <ul className={styles["address-list"]}>
      {MOKK_ADDRESSES.map(
        ({address, name, workingMode, count, coordinates}) => {
          const isActive =
            JSON.stringify(coordinates) === JSON.stringify(currentCoordinates);

          return (
            <li key={address} className={styles["address-item"]}>
              <div className={styles["address-item_info"]}>
                <span className={styles["address-item_info-location "]}>
                  {address}
                </span>
                <span className={styles["text-small"]}>{name}</span>
                <span className={styles["text-small"]}>{workingMode}</span>
                <span className={styles["address-item_info-available"]}>
                  {count}
                </span>
              </div>

              <Button
                className={!isActive && styles["outline-button"]}
                onClick={() =>
                  setMapState((prevValue) => {
                    return {...prevValue, center: coordinates};
                  })
                }
              >
                Выбрано
              </Button>
            </li>
          );
        }
      )}
    </ul>
  </div>
);

export default Addresses;
