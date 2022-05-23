import React, { useState } from 'react'
import ListDisplay from './ListDisplay'

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
  }

  return (

    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' placeholder='task' onChange={(e) => handleChange(e)}></input>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option defaultValue disabled selected>category</option>
                <option value='chores'>chores</option>
                <option value='errands'>errands</option>
                <option value='work'>work</option>
            </select>
            <button type='submit'>Add</button>
        </form>
        <ListDisplay list={list}/>
    </div>
  )
}

export default Main