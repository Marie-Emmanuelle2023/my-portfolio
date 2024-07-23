import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Home from './components/Home';




function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Body/>} />
      </Routes>
    </Router>
  );
}

export default App;
