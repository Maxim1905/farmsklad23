import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <h1>
      Страницы по этому адресу не существует. <br /> <br />
      Переход на главную черех <strong>3</strong> секунды
    </h1>
  );
};

export default Error;
