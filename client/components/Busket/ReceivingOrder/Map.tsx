import styles from "./styles.module.scss";

import {MOKK_ADDRESSES} from "../../constants";

import {
  YMaps,
  Map as YMap,
  Placemark,
  GeolocationControl,
  ZoomControl,
} from "react-yandex-maps";

const Map = ({mapState}) => (
  <YMaps>
    <YMap className={styles.mapblock} state={mapState}>
      <GeolocationControl options={{float: "left"}} />
      <ZoomControl options={{float: "right"}} />

      {MOKK_ADDRESSES.map(({coordinates}) => (
        // eslint-disable-next-line react/jsx-key
        <Placemark geometry={coordinates} />
      ))}
    </YMap>
  </YMaps>
);

export default Map;
