import React from 'react'
import TodayContext from './today-context'

const TodayProvider = (props) => {

    const addItemToToday = (item) => {
        TodayContext.todaysItems.push(item)
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