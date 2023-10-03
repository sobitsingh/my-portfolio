import logo from './logo.svg';
import './App.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


import Homepage from './components/homepage.js';
import Blog from './components/blog';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          
          </Routes>
        </div>

      <header className="bg-splash-gray px3 py3 border-bottom border-light-gray"></header>
    </div>
  );
}

export default App;
