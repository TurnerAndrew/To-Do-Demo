import React, { useEffect, useState } from "react";
import ListDisplay from "./ListDisplay";
import { useFormik } from "formik";
import "../App.css";
import axios from "axios";

const Main = () => {
  const [allCategories, setAllCategories] = useState([]);
  // const [item, setItem] = useState({})
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/getCategories')
      .then((res) => setAllCategories(res.data))
    axios
      .get('http://localhost:4000/api/getAllTasks')
      .then((res) => setList(res.data))
  },[])

  const catOptions = allCategories.map((cat, index) => {
    return <option value={cat.category_id}>{cat.title}</option>
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: null,
    },
    onSubmit: (values) => {
      axios
        .post('http://localhost:4000/api/addTask', values)
        .then((res) => console.log(res.data))
      console.log(values);
    },
  });

  return (
    <div id="main">
      <h1>Add Task</h1>
      <form onSubmit={formik.handleSubmit} id="item-form">
        <div id="input">
          <input
            name="name"
            type="text"
            placeholder="task"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          <input
            name="description"
            type="text"
            placeholder="Describe your Task"
            onChange={formik.handleChange}
            value={formik.values.description}
          ></input>
          <select name="category"value={formik.values.category} onChange={formik.handleChange}>
            <option defaultValue disabled selected>
              category
            </option>
            {catOptions}
            {/* <option value="chores">chores</option>
            <option value="errands">errands</option>
            <option value="work">work</option> */}
          </select>
        </div>
        <button type="submit">Add</button>
      </form>
      <ListDisplay list={list} setList={setList} />
    </div>
  );
};

export default Main;
