import styles from "./styles.module.scss";

import {UserContext} from "../../../contexts/userContext";
import {useContext} from "react";
import Button from "../../common/Button";
import CustomImage from "../../common/CustomImage";
import {useRouter} from "next/router";

const Profile = ({onClose}: {onClose: () => void}) => {
  const {user, setIsAuth, setUser} = useContext(UserContext);

  const {push} = useRouter();

  const handleLogout = () => {
    setIsAuth(false);
    setUser({});
    localStorage.removeItem("token");
    push("/");
  };

  return (
    <div className={styles["profileModal_content"]}>
      <CustomImage
        src="/AvatarIcon.svg"
        className={styles["profileModal_content_avatarIcon"]}
        alt="AvatarIcon"
      />

      <div className={styles["profileModal_content-user"]}>
        Пользователь: <span> {user.email}</span>
      </div>

      {user.role === "ADMIN" && (
        <Button
          className={styles["admin-button"]}
          onClick={() => {
            push("/admin");
            onClose();
          }}
        >
          <>
            <CustomImage
              src="/EditIcon.svg"
              className={styles["profileModal_content_button-icon"]}
              alt="EditIcon"
            />
            Админ-панель
          </>
        </Button>
      )}

      <div className={styles.buttons}>
        <Button onClick={() => {}}>
          <>
            <CustomImage
              src="/ListIcon.svg"
              className={styles["profileModal_content_button-icon"]}
              alt="ListIcon"
            />
            Мои заказы
          </>
        </Button>

        <Button
          className={styles["profileModal_content_exit"]}
          onClick={handleLogout}
        >
          <>
            <CustomImage
              src="/LogoutIcon.svg"
              className={styles["profileModal_content_button-icon"]}
              alt="LogoutIcon"
            />
            Выйти
          </>
        </Button>
      </div>
    </div>
  );
};

export default Profile;
