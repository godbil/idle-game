import './App.css';
import Menu from './pages/Menu';
import Game from './pages/Game'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/menu' element={<Menu />} />
        <Route path='/idleGame' element={<Game />} />
      </Routes>
  </Router>
  );
}

export default App;
