import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import MenuIcon from '@rsuite/icons/Menu';
import ExploreIcon from '@rsuite/icons/Explore'
import PageIcon from '@rsuite/icons/Page';
import NumbersIcon from '@rsuite/icons/Numbers';
import PeoplesIcon from '@rsuite/icons/Peoples';
import { Dropdown, IconButton } from 'rsuite';
import './App.css';
import "rsuite/dist/rsuite.min.css";

function Menu() {

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
    <div>
    <Dropdown renderToggle={renderIconButton} >
          <Dropdown.Item as={NavLink} href="/" icon={<PageIcon />}>
            Home
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} href="/map" icon={<ExploreIcon />}>
            Map
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} href="/bracket" icon={<NumbersIcon />}>
            Bracket
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} href="/login" icon={<PeoplesIcon />}>
            Login
          </Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default Menu