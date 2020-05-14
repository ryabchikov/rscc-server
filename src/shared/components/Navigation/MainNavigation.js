import React from 'react'

import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';

import './MainNavigation.css';

const MainNavigation = () => {
    return (
      <div className="main-header">
        <h2><Link to="/">DMZ</Link></h2>
        <nav>
          <NavLinks />
        </nav>
      </div>
    );
}

export default MainNavigation;