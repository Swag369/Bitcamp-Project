import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
