import React, { useEffect, useState } from 'react'
import '../App.css'

const Item = ({ task, id, list, setList }) => {

  const [checked, setChecked] = useState(false)

  const handleDelete = (id) => {
    list.splice(id, 1)
    setList([...list])
  }

  return (
    <div id='item'>
        <h2 onClick={() => setChecked(!checked)} className={checked ? 'checked' : null}>{task.task}</h2>
        <h4>{task.category}</h4>
        <h1 onClick={() => handleDelete(id)}>x</h1>
    </div>
  )
}

export default Item