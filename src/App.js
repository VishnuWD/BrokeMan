// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import Navbar from './components/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';

function App() {
  return (
    
      <div className="App">
       
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

        
        </div>
    
  );
}

export default App;
