import {useState} from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

import Logo from "../../common/Logo";
import BonusCardButton from "../../common/BonusCardButton";
import Select from "../../common/Select";
import Modal from "../../common/Modal";
import CustomImage from "../../common/CustomImage";
import BasketWidget from "../../common/BasketWidget";
import {AREAS_OPTIONS} from "./constants";
import AreasList from "./AreasList";
import NavLinksList from "./NavLinksList";
import Profile from "./Profile";
import {useRouter} from "next/router";

const Information = () => {
  const [selectedArea, setSelectedArea] = useState<any>({
    title: "мкр. Фестивальный",
    id: "1",
  });

  const [areasListIsOpen, setAreasListIsOpen] = useState<boolean>(false);
  const [navLinksListIsOpen, setNavLinksListIsOpen] = useState<boolean>(false);
  const [profileIsOpen, setProfileIsOpen] = useState<boolean>(false);

  const {push} = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <CustomImage
          src="/CatalogIcon.svg"
          alt="CatalogIcon"
          className={styles["catalog-icon"]}
          onClick={() => {
            setNavLinksListIsOpen(true);
          }}
        />
        <CustomImage
          src="/LogoIcon.svg"
          className={styles.logo}
          alt="LogoIcon"
          onClick={() => push("/")}
        />
        <div className={styles["geolocation-block"]}>
          <Select
            values={AREAS_OPTIONS}
            onSelect={(packet) => setSelectedArea(packet)}
            selected={selectedArea}
          />
        </div>

        <CustomImage
          src="/GeolocationIcon.svg"
          alt="GeolocationIcon"
          onClick={() => setAreasListIsOpen(true)}
          className={styles.geolocationIcon}
        />

        <BasketWidget className={styles.basket} />
        <div className={styles["phone-block"]}>
          <Image src="/PhoneIcon.svg" width={20} height={20} alt="PhoneIcon" />

          <div>
            <a className={styles["phone-block_number"]} href="tel:+79109170519">
              8 910 917 05 19
            </a>

            <span className={styles["phone-block_description"]}>
              Горячая линия онлайн <strong>24/7</strong>
            </span>
          </div>
        </div>
        <BonusCardButton className={styles.button} />

        <CustomImage
          src="/ProfileIcon.svg"
          alt="ProfileIcon"
          className={styles.profileIcon}
          onClick={() => setProfileIsOpen(true)}
        />
      </div>

      <Modal
        isOpen={areasListIsOpen}
        onClose={() => setAreasListIsOpen(false)}
        containerClassName={styles.modal}
      >
        <AreasList
          selectedArea={selectedArea}
          setSelectedArea={(value) => {
            setSelectedArea(value);
            setAreasListIsOpen(false);
          }}
        />
      </Modal>

      <Modal
        isOpen={navLinksListIsOpen}
        onClose={() => setNavLinksListIsOpen(false)}
        containerClassName={styles.modal}
      >
        <NavLinksList onClose={() => setNavLinksListIsOpen(false)} />
      </Modal>

      <Modal
        isOpen={profileIsOpen}
        onClose={() => setProfileIsOpen(false)}
        containerClassName={styles.profileModal}
      >
        <Profile onClose={() => setProfileIsOpen(false)} />
      </Modal>
    </>
  );
};

export default Information;
