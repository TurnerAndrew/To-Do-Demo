import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Item = ({ task, id, list, setList }) => {
  console.log(task);
  const [checked, setChecked] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/deleteTask/${task.task_id}`)
      .then((res) => {
        list.splice(id, 1);
        setList([...list]);
      });
  };

  return (
    <div id="item">
      <h2
        onClick={() => setChecked(!checked)}
        className={checked ? "checked" : null}
      >
        {task.task_name}
      </h2>
      <h4>{task.title}</h4>
      <h1 onClick={handleDelete}>x</h1>
    </div>
  );
};

export default Item;
