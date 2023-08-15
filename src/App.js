import './App.css';
import Menu from './pages/Menu';
import Game from './pages/Game'
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Menu/>} />
        <Route path='/idleGame' element={<Game/>} />
      </Routes>
  </HashRouter>
  );
}

export default App;
