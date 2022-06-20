import React, { useContext } from 'react'
import TodayContext from '../store/today-context'
import TodayProvider from '../store/TodayProvider'
import Item from './Item'

const Today = () => {

    const context = useContext(TodayContext)

    console.log(context)

    const listMapped = context.todaysItems.map((item, index) => {
        return (
            <Item key={index} id={index} task={item}/> 
        )
    })

  return (
    <div>{listMapped}</div>
  )
}

export default Today