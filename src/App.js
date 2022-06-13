import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Details from './components/Details';
import Header from './components/Header';
import Main from './components/Main'
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<About />} />
        <Route path="/addTask" element={<Main />} />
        <Route path="/team/*" element={<Team />} />
        <Route path="/details/:pokemon" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
