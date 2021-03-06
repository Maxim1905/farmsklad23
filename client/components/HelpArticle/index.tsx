import {useContext, useEffect} from "react";

import {useRouter} from "next/router";

import {UserContext} from "../../contexts/userContext";

import styles from "./styles.module.scss";
import CustomImage from "../common/CustomImage";

const Help = () => {
  const user = useContext(UserContext);

  const {push} = useRouter();

  useEffect(() => {
    if (!user.isAuth) {
      push("/login");
    }
  }, [user.isAuth]);

  return (
    <div>
      <h1 className={styles.title}>
        Как сохранить здоровым сердце при стрессе?
      </h1>

      <CustomImage
        className={styles.mokkHelpfullImage}
        src="/MokkHelpfullImage.png"
        alt="MokkHelpfullImage"
      />

      <div className={styles.content}>
        <p className={styles.text}>
          Противоположная точка зрения подразумевает, что некоторые особенности
          внутренней политики функционально разнесены на независимые элементы.
          Задача организации, в особенности же дальнейшее развитие различных
          форм деятельности требует анализа экспериментов, поражающих по своей
          масштабности и грандиозности. Следует отметить, что сложившаяся
          структура организации в значительной степени обусловливает важность
          переосмысления внешнеэкономических политик. Лишь сторонники
          тоталитаризма в науке объявлены нарушающими общечеловеческие нормы
          этики и морали. Вот вам яркий пример современных тенденций - понимание
          сути ресурсосберегающих технологий требует определения и уточнения
          благоприятных перспектив.
          <br />
          <br />И нет сомнений, что тщательные исследования конкурентов
          разоблачены. Предварительные выводы неутешительны:
          социально-экономическое развитие требует от нас анализа дальнейших
          направлений развития. Приятно, граждане, наблюдать, как акционеры
          крупнейших компаний своевременно верифицированы. Следует отметить, что
          новая модель организационной деятельности не оставляет шанса для
          экономической целесообразности принимаемых решений.
          <br />
          <br />
          Лишь сторонники тоталитаризма в науке объявлены нарушающими
          общечеловеческие нормы этики и морали. Вот вам яркий пример
          современных тенденций - понимание сути ресурсосберегающих технологий
          требует определения и уточнения благоприятных перспектив.Лишь
          сторонники тоталитаризма в науке объявлены нарушающими
          общечеловеческие нормы этики и морали. Вот вам яркий пример
          современных тенденций - понимание сути ресурсосберегающих технологий
          требует определения и уточнения благоприятных перспектив.Лишь
          сторонники тоталитаризма в науке объявлены нарушающими
          общечеловеческие нормы этики и морали. Вот вам яркий пример
          современных тенденций - понимание сути ресурсосберегающих технологий
          требует определения и уточнения благоприятных перспектив.
        </p>

        <CustomImage
          src="/HelpfullArticle.png"
          alt="HelpfullArticle"
          className={styles.illustration}
        />
      </div>
    </div>
  );
};

export default Help;
