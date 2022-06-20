import React, { useContext, useState } from 'react'
import TodayContext from './today-context'

const TodayProvider = (props) => {
    const [todaysItems, setTodaysItems] = useState([])
    const addItem = (item) => {
        setTodaysItems([...todaysItems, item])
    }
   

    return (
        <TodayContext.Provider value={{todaysItems, addItem}}>
            {props.children}
        </TodayContext.Provider>
    )
}

export default TodayProvider