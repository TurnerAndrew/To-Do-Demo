import React, { createContext } from 'react'

const TodayContext = createContext({
    todaysItems: [],
    addItem: () => {}
})

export default TodayContext