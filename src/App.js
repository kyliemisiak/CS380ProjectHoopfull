import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import MenuIcon from '@rsuite/icons/Menu';
import ExploreIcon from '@rsuite/icons/Explore'
import PageIcon from '@rsuite/icons/Page';
import SearchIcon from '@rsuite/icons/Search';
import PeoplesIcon from '@rsuite/icons/Peoples';
import { Dropdown, IconButton } from 'rsuite';
import './App.css';
import Home from './Home'
import Map from './Map'
import Teams from './Teams'
import "rsuite/dist/rsuite.min.css";


function App() {

  const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  const renderIconButton = (props, ref) => {
    return (
      <IconButton {...props} ref={ref} icon={<MenuIcon />} padding-left='20px' color="orange" appearance="primary" />
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        <Dropdown renderToggle={renderIconButton} >
          <Dropdown.Item as={NavLink} href="/" icon={<PageIcon />}>
            Home
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} href="/map" icon={<ExploreIcon />}>
            Map
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} href="/teams" icon={<PeoplesIcon />}>
            Teams
          </Dropdown.Item>
        </Dropdown>
      </header>
      <Routes>
            /*need to specify the path to each file and import them*/
        <Route path="/" element={<Home />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </div>

  );
}

export default App;
