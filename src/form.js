import React, { useState } from "react";
import useAppSelector from "./hooks/useAppSelector";
import DATA from "./datas/mockData.json";
import { useAppDispatch } from "./hooks/useAppDispatch";
const Form = () => {
  const [form, setForm] = useState({});

  const record = useAppSelector();

  const [data, setData] = useState(DATA.data);

  const getDate = () => {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }
    return (today = dd + "/" + mm + "/" + yyyy);
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setData([
      ...data,
      [form.name, "TESODEV", form.email, `date`, form.country, form.city],
    ]);
  };

  return (
    <div>
      {data.map((item) => (
        <div>
          {item[0]} ---- {item[1]}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleForm}
          value={form.name}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={handleForm}
          value={form.company}
          name="company"
          placeholder="company"
        />
        <input
          type="text"
          onChange={handleForm}
          value={form.email}
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          onChange={handleForm}
          value={form.date}
          name="date"
          placeholder="date"
        />
        <input
          type="text"
          onChange={handleForm}
          value={form.country}
          name="country"
          placeholder="country"
        />
        <input
          type="text"
          onChange={handleForm}
          value={form.city}
          name="city"
          placeholder="city"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
