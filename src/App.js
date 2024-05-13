import { BrowserRouter, Routes, Route, Navigate, Router, useNavigate, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Map from './Map'
import { IconButton } from "rsuite";
import {Explore} from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";

/*Go to the map page when clicked*/


function App() {

  const ButtonStyle = { margin: "0px 10px" };
  return (
    <div className="App">
      <header className ="App-header">HoopFull Tournament
      </header>
          <Routes>
            /*need to specify the path to ech file and imort them*/
            <Route path="/" element={<Home/>}></Route>
            <Route path="/map" element={<Map/>}></Route>
          </Routes>
      <footer className = "App-footer">
        /*button for map without icon trying to figure*/
          <Link to="/map">Map</Link>
      </footer>
    </div>
    
  );
}

export default App;
