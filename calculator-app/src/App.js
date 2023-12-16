import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Quote from './Components/Quote';
import { Calculator } from './Components/Calculator';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1 id="animated-heading">MATH MAGICIAN</h1>
          <ul>
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/calculator">Calculator</NavLink></li>
            <li><NavLink to="/quote">Quote</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
