import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Map from './Map'
import Teams from './Teams'
import Menu from './Menu';
import "rsuite/dist/rsuite.min.css";
import Bracket from './Bracket'
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/bracket" element={<Bracket />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>

  );
}

export default App;
