import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './Components/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
