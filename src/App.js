import logo from './logo.svg';
import './App.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


import Homepage from './components/homepage';
import Blog from './components/blog';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Routes> {/* Wrap your Routes */}
        <Route path="/" element={<Homepage />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </div>
      <header class="bg-splash-gray px3 py3 border-bottom border-light-gray"></header>
     
      
    </div>
  );
}

export default App;
