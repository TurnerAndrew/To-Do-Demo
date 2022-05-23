import React from 'react'

const Item = ({ task }) => {

    console.log(task)

  return (
    <div>
        {task.task}
        {task.category}
    </div>
  )
}

export default Item