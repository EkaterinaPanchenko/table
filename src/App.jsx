import { Table } from "./components/Table";
import { Form } from "./components/Form";
import { useState } from "react";

const titles = [
  { text: "№", id: 0, name: "number" },
  { text: "Название", id: 1, name: "name" },
  { text: "Количество", id: 2, name: "quantity" },
  { text: "Стоимость", id: 3, name: "cost" },
  { text: "", id: 4, name: "delete" },
];

export const App = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (formData) => {
    const newData = {
      ...formData,
      id: new Date().getTime(),
    };

    setData([...data, newData]);
  };

  const handleChange = (value, fieldName, id) => {
    setData(
      data.map((item) =>
        item.id === +id ? { ...item, [fieldName]: value } : item
      )
    );
  };

  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== +id));
  };

  return (
    <>
      <Form titles={titles} handleSubmit={handleSubmit} />
      <Table
        data={data}
        titles={titles}
        handleChange={handleChange}
        handleRemove={handleRemove}
      />
    </>
  );
};
