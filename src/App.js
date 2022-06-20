import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Details from "./components/Details"
import Header from "./components/Header"
import Main from "./components/Main"
import Team from "./components/Team"
import Today from './components/Today'
import TodayProvider from './store/TodayProvider'

function App() {
  return (
    <TodayProvider>
      <div className='App'>
        <Header />
        <Routes>
          <Route index element={<About />} />
          <Route path='/addTask' element={<Main />} />
          <Route path='/team/*' element={<Team />} />
          <Route path='/details/:pokemon' element={<Details />} />
          <Route path='/today' element={<Today />}/>
        </Routes>
      </div>
    </TodayProvider>
  )
}

export default App
