import React, { useState } from 'react'
import Item from './Item'
import '../App.css'

const ListDisplay = (props) => {
  console.log(props)

 const { list, setList } = props
 const [selected, setSelected] = useState('')
 

const listMapped = list.filter((item) => {
  if(selected) return item.category === selected
  return item}).map((item, index) => {
  return <Item key={index} id={index} task={item} list={list} setList={setList}/> 
})

  return (
    <div>
      <div id='filter'>
        <p>Show only:</p> <select onChange={(e) => setSelected(e.target.value)} id='category'>
          <option defaultValue selected></option>
          <option value='chores'>chores</option>
          <option value='errands'>errands</option>
          <option value='work'>work</option>
        </select>
        <section id='list'>
          {listMapped}
        </section>
      </div>
    </div>
  )
}

export default ListDisplay