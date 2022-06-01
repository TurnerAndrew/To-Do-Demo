import React, { useState } from 'react'
import ListDisplay from './ListDisplay'
import '../App.css'

const Main = () => {

  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  // const [item, setItem] = useState({})
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList([...list, {task: task, category: category}])
    setTask('')
  }

  return (
    <div id='main'>
      <h1>Add Task</h1>
        <form onSubmit={(e) => handleSubmit(e)} id='item-form'>
          <div id='input'>
            <input type='text'placeholder='task' onChange={(e) => handleChange(e)} value={task}></input>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue disabled selected>category</option>
                <option value='chores'>chores</option>
                <option value='errands'>errands</option>
                <option value='work'>work</option>
            </select>
          </div>
            <button type='submit'>Add</button>
          </form>
        <ListDisplay list={list} setList={setList}/>
      </div>
  )
}

export default Main