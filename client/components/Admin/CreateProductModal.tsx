import {useEffect, useMemo, useState} from "react";

import styles from "./styles.module.scss";
import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";

import {getTypes, createDevice} from "../../http/deviceAPI";

const CreateProductModal = () => {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [releaseForm, setReleaseForm] = useState("");
  const [methodOfApplication, setMethodOfApplication] = useState("");
  const [storageConditions, setStorageConditions] = useState("");
  const [activeSubstance, setActiveSubstance] = useState("");
  const [dosage, setDosage] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState(null);

  const selectFile = (event) => {
    setFile(event.target.files[0]);
  };

  const formatTypes = useMemo(
    () => types.map(({name, id}) => ({title: name, id})),
    [types]
  );

  const [typeId, setTypeId] = useState<any>(formatTypes[0] || null);

  useEffect(() => {
    setTypeId(formatTypes[0]);
  }, [formatTypes]);

  const addDevice = () => {
    if (!name) return alert("Укажите название товара");
    if (!typeId) return alert("Укажите категорию товара");
    if (!price) return alert("Укажите цену товара");
    if (!file) return alert("Добавьте изображение");

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("manufacturer", manufacturer);
    formData.append("releaseForm", releaseForm);
    formData.append("methodOfApplication", methodOfApplication);
    formData.append("storageConditions", storageConditions);
    formData.append("activeSubstance", activeSubstance);
    formData.append("dosage", dosage);
    formData.append("expirationDate", expirationDate);
    formData.append("country", country);

    formData.append("img", file);
    formData.append("typeId", typeId.id);

    createDevice(formData)
      .then((data) => alert(`Успешно создан продукт ${data.name}`))
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    getTypes().then((types) => setTypes(types));
  }, []);

  return (
    <div className={styles.createProduct}>
      <Input
        placeholder="Название"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <Input
        placeholder="Производитель"
        value={manufacturer}
        onChange={(event) => setManufacturer(event.target.value)}
      />
      <Input
        placeholder="Форма выпуска"
        name="releaseForm"
        value={releaseForm}
        onChange={(event) => setReleaseForm(event.target.value)}
      />
      <Input
        placeholder="Способ применения"
        value={methodOfApplication}
        onChange={(event) => setMethodOfApplication(event.target.value)}
      />
      <Input
        placeholder="Условия хранения"
        value={storageConditions}
        onChange={(event) => setStorageConditions(event.target.value)}
      />
      <Input
        placeholder="Активное вещество"
        name="activeSubstance"
        value={activeSubstance}
        onChange={(event) => setActiveSubstance(event.target.value)}
      />
      <Input
        placeholder="Дозировка"
        name="dosage"
        value={dosage}
        onChange={(event) => setDosage(event.target.value)}
      />
      <Input
        placeholder="Срок годности"
        value={expirationDate}
        onChange={(event) => setExpirationDate(event.target.value)}
      />
      <Input
        placeholder="Страна"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />

      <input type="file" placeholder="Изображение" onChange={selectFile} />

      <Select
        isLocatonImage={false}
        values={formatTypes}
        onSelect={(packet) => setTypeId(packet)}
        selected={typeId}
      />

      <Button onClick={addDevice}>Создать продукт</Button>
    </div>
  );
};

export default CreateProductModal;
