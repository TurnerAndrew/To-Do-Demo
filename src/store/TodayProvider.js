import React, { useContext } from 'react'
import TodayContext from './today-context'

const TodayProvider = (props) => {

   
    const addItemToToday = (item) => {
        todayContext.todaysItems.push(item)
    }

    const todayContext = {
        todaysItems: [],
        addItem: addItemToToday
    }

    return (
        <TodayContext.Provider value={todayContext}>
            {props.children}
        </TodayContext.Provider>
    )
}

export default TodayProvider