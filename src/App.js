
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RandomFoodSelect from './pages/RandomFoodSelect';
import About from './pages/About';
import Roulette from './pages/Roulette';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/random' element={<RandomFoodSelect/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/roulette' element={<Roulette/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
