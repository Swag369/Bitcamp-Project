import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Home.js';
import Demo from './Demo.js';
import Login from './Login.js';
import PlayGround from './Playground.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/demo' exact element={<Demo />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/playground' exact element={<PlayGround />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
