import styles from "./styles.module.scss";

import PickupLocation from "./PickupLocation";
import YourOrder from "./YourOrder";
import PaymentMethod from "./PaymentMethod";
import ContactDetails from "./ContactDetails";

const PaymentAndConfirmation = () => (
  <div className={styles.container}>
    <PickupLocation />
    <PaymentMethod />
    <ContactDetails />

    <YourOrder />
  </div>
);

export default PaymentAndConfirmation;
