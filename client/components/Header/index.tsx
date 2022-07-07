import styles from "./styles.module.scss";

import Information from "./Information";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.container}>
      <Information />
      <Search />
      <Navbar />
    </header>
  );
};

export default Header;
